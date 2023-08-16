export const createDocument = async (Model, data) => {
  return await Model.create(data);
};

export const getDocuments = async (Model) => (
   await Model.find()
);

export const updateDocument = async (Model, id, updates) => {
  return await Model.updateOne({ _id: id }, { $set: updates });
};

export const deleteDocument = async (Model, id) => {
  return await Model.deleteOne({ _id: id });
};
