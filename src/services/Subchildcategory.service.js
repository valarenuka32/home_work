const { SubchildCategory } = require("../models");

/**
 * Create SubchildCategory
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createSubchildCategory = async (reqBody) => {
    return SubchildCategory.create(reqBody);
};

const SubchildCategoryList = async (req, res) => {
    return SubchildCategory.find()
    .populate("category")
    .populate("subCategory")
};

const deleteRecord = async (SubchildCategoryId) => {
    return SubchildCategory.findByIdAndDelete(SubchildCategoryId);
};

const getSubchildCategoryById = async (SubchildCategoryId) => {
    return SubchildCategory.findById(SubchildCategoryId);
};

const updateDetiles = async (SubchildCategoryId, updateBody) => {
    return SubchildCategory.findByIdAndUpdate(SubchildCategoryId, { $set: updateBody });
};


module.exports = {
    createSubchildCategory,
    SubchildCategoryList,
    deleteRecord,
    getSubchildCategoryById,
    updateDetiles,
};