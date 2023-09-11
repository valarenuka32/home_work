const { subCategory } = require("../models");

/**
 * Create subCategory
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createsubCategory = async (reqBody) => {
    return subCategory.create(reqBody);
};

const subCategoryList = async (req, res) => {
    return subCategory.find()
    .populate("categorys");
};

const deleteRecord = async (subCategoryId) => {
    return subCategory.findByIdAndDelete(subCategoryId);
};

const getsubCategoryById = async (subCategoryId) => {
    return subCategory.findById(subCategoryId);
};

const updateDetiles = async (subCategoryId, updateBody) => {
    return subCategory.findByIdAndUpdate(subCategoryId, { $set: updateBody });
};


module.exports = {
    createsubCategory,
    subCategoryList,
    deleteRecord,
    getsubCategoryById,
    updateDetiles,
};