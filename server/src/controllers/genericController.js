import {
  createDocument,
  updateDocument,
  getDocuments,
  getDocument,
  deleteDocument,
} from "../services/genericService.js";

import { models } from "../models/models.js";

export const showDocument = async ({ params: { model, id} }, res) => {
  const Model = models[model];
  try {
    const documents = await getDocument(Model,id);
    return res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addDocument = async ({ params: { model }, body }, res) => {
  const Model = models[model];
  try {
    const newDocument = await createDocument(Model, body);
    res.json(newDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const showAllDocuments = async ({ params: { model } }, res) => {
  const Model = models[model];
  try {
    const documents = await getDocuments(Model);
    return res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const changeDocument = async ({ params: { model, id }, body }, res) => {
  const Model = models[model];
  try {
    const documentId = id;
    const updates = body;
    const result = await updateDocument(Model, documentId, updates);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeDocument = async ({ params: { model, id } }, res) => {
  const Model = models[model];
  try {
    const documentId = id;
    const result = await deleteDocument(Model, documentId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
