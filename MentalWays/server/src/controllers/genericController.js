import { createDocument,updateDocument,getDocuments,deleteDocument } from "../services/genericService";

const createDocument = async (req, res) => {
  const modelName = req.params.model;
  const Model = require(`../models/${modelName}`);
  
  try {
    const newDocument = await genericService.createDocument(Model, req.body);
    res.json(newDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDocuments = async (req, res) => {
  const modelName = req.params.model;
  const Model = require(`../models/${modelName}`);
  
  try {
    const documents = await genericService.getDocuments(Model);
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDocument = async (req, res) => {
  const modelName = req.params.model;
  const Model = require(`../models/${modelName}`);
  
  try {
    const documentId = req.params.id;
    const updates = req.body;
    const result = await genericService.updateDocument(Model, documentId, updates);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDocument = async (req, res) => {
  const modelName = req.params.model;
  const Model = require(`../models/${modelName}`);
  
  try {
    const documentId = req.params.id;
    const result = await genericService.deleteDocument(Model, documentId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDocument,
  getDocuments,
  updateDocument,
  deleteDocument,
};
