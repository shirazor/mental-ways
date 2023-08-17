import { AsyncRouter } from "express-async-router";
import {
  addDocument,
  showAllDocuments,
  removeDocument,
  changeDocument,
  showDocument,
  showDocumentPop
} from "../controllers/genericController.js";

const genericRoute = AsyncRouter();
const { get, patch, delete: remove, post } = genericRoute;

get("/:model", (req, res) => showAllDocuments(req, res));

get("/:model/:id", (req, res) => showDocument(req, res));

get("/:model/:id/populated", (req, res) => showDocumentPop(req, res));

patch("/:model/:id", (req, res) => changeDocument(req, res));

post("/:model", (req, res) => addDocument(req, res));

remove("/:model/:id", (req, res) => removeDocument(req, res));

export default genericRoute;
