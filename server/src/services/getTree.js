import answer from "../models/Answer.js";
import { models } from "../models/models.js";

export const getDocumentTree = async (model, id, chain) => {
  const refPath = populateByModel[model.modelName].field;
  const refModelName = populateByModel[model.modelName].refModel;
  const refModel = models[refModelName];

  console.log(refPath);
  if (refPath) {
    console.log("im inside");
    console.log("with this id", id.toString());
    console.log("with this model",model);
    let searchedModel = await model.findById(id.toString());
    console.log("im after searching model");
    console.log("model",searchedModel);
    if (searchedModel){
        if (refPath === "answers") {
            console.log("im answers");
            await populateAnswer(chain,searchedModel)
        } else {
        console.log("im not answers");
          chain.push(await searchedModel.populate(refPath));
          return (getDocumentTree(refModel, searchedModel[refPath]._id, chain));
        }
    }
    console.log("this is the chain, before ending",chain);
    return chain;
}};

const populateByModel = {
  Step: { field: "answers", refModel: "step" },
  Conversation: { field: "initialStep", refModel: "step" },
};

const populateAnswer = async (chain,searchedModel) => {
  chain.push(
    await searchedModel.populate({
      path: "answers",
      populate: {
        path: "nextStep",
      },
    })
  );
  searchedModel.answers.forEach( (answer) => {
    console.log("Answer is", answer);
     (getDocumentTree(models["step"],  answer.nextStep["_id"], chain));
  });
};
