import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  initialStep: { 
    type: mongoose.SchemaTypes.ObjectId, 
    ref: "Step" },
});

const convo = mongoose.model("Conversation", conversationSchema);
export default convo;
