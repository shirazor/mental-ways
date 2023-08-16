import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    value: {
      type: String,
      required: true,
    },
    nextStep: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Step",
    },
    extraDetails:{
        category:{
            type: Number,
        },
        searchValue:{
            type:String
        }
    }
  });

const answer = mongoose.model("Answer", answerSchema);
export default answer;