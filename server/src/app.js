import express from "express";
import "dotenv/config";
import { connect } from "mongoose";
import genericApi from "./api/genericApi.js";
const app = express();
import conversationRoute from "./api/conversationApi.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/conversations", conversationRoute)
app.use("/",genericApi);

connect(process.env["MONGODB"], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.listen(process.env["PORT"]);

export default app;
