const { category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createcategory = async (reqBody) => {
  return category.create(reqBody);
};

const getCategoryList = async (req, res) => {
  return category.find({$or:[{is_active:true}]});
};

const deleteRecord = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
};

const getCategoryById = async (categoryId) => {
  return category.findById(categoryId);
};

const updateDetails = async (categoryId, updateBody) => {
  return category.findByIdAndUpdate(categoryId, { $set: updateBody });
};


module.exports = {
  createcategory,
  getCategoryList,
  deleteRecord,
  getCategoryById,
  updateDetails
};