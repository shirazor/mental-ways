import mongoose from "mongoose";

const stepSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      value: {
        type: String,
        required: true,
      },
      nextStep: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Step",
      },
    },
  ],
  index: {
    type: Number,
    required: true,
  },
});

const step = mongoose.model("Step", stepSchema);
export default step;
