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
});

const stepSchema = new mongoose.Schema({
  question: {
    type: [String],
    required: true,
  },
  answers: {
    type: [answerSchema],
    required: true,
  },
});

const step = mongoose.model("Step", stepSchema);
export default step;
