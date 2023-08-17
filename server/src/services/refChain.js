import { models } from "../models/models.js";


export const traverseTree = async(modelName, modelId, depth = 0) =>{
  const populateField = getRefField(model.schema.paths);
  console.log("populate field",populateField);
  const node = await model.findById(modelId).populate(populateField);

  if (!node) {
    return null;
  }

  console.log("  ".repeat(depth) + node.title);

  if (node.populateField) {
    await traverseTree(populateField,node.populateField._id, depth + 1);
  }
}

const getRefField = (schemaPaths) => {
  for (const path in schemaPaths) {
    return (
      schemaPaths[path].instance === "ObjectId" &&
      schemaPaths[path].options.ref
    )? path:null ;
}};

// Usage
const startNodeId = "your_starting_node_id";
traverseTree(startNodeId)
  .then(() => {
    console.log("Traversal complete.");
  })
  .catch((err) => {
    console.error(err);
  });

// const populateChain = async (objectId, refField, chain, model) => {
//   console.log(model);
//   console.log(objectId);
//   console.log(refField);
//   let document = await model.findById(objectId);
//   if (!document) {
//     return;
//   }
//   chain.push(document);
//   console.log(chain)

//   if (document[refField]) {
//     await populateChain(document[refField]._id, refField, chain, model);
//   }
//   return chain;
// };

// export const traverseReferences = async (startObjectId, model) => {
//   let chain = [];
//   chain.push(model.findById(startObjectId));
//   let schemaPaths = model.schema.paths;

//   for (const path in schemaPaths) {
//     if (schemaPaths[path].instance === "ObjectId" && schemaPaths[path].options.ref) {
//       let refModel = models[schemaPaths[path].options.ref.toLowerCase()];
//       const refId = (await model.findById(startObjectId))[path];
//       chain.push(refModel);
//       chain = await populateChain(refId, path, chain, refModel);
//     }
//   }
//   console.log(chain);
//   return chain;
// };

// const getRefField=(schemaPaths)=>{

// }
