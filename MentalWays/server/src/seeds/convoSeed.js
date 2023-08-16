import { seeder } from "mongoose-seed";

seeder.connect("mongodb://127.0.0.1:27017/mentalways", () => {
  seeder.loadModels(["../models/Step.js"]);

  seeder.clearModels(["Step"], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});

var data = [
  {
    model: "Step",
    documents: [
      { title: "title1", initialStep: "" },
      { title: "title2", initialStep: "" },
    ],
  },
];
