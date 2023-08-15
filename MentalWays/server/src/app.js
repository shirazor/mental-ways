import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.send("gilad was h");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/mentalways", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.listen(8080);

export default app;
