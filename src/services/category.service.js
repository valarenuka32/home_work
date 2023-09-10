const { category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createcategory = async (reqBody) => {
    return category.create(reqBody);
};

const categoryList = async (req, res) => {
    return category.find();
};

const deleteRecord = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};

const getcategoryById = async (categoryId) => {
    return category.findById(categoryId);
};

const updateDetiles = async (categoryId, updateBody) => {
    return category.findByIdAndUpdate(categoryId, { $set: updateBody });
};


module.exports = {
    createcategory,
    categoryList,
    deleteRecord,
    getcategoryById,
    updateDetiles,
};