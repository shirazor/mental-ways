import mongoose from "mongoose";

const stepSchema = new mongoose.Schema({
  question: {
    type: [String],
    required: true,
  },
  answers: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Answer",
    required: true,
  }],
});

const step = mongoose.model("Step", stepSchema);
export default step;
