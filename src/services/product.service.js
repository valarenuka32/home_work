const { product } = require("../models");

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createProduct = async (reqBody) => {
    return product.create(reqBody);
};

const productList = async (req, res) => {
    return product.find()
    .populate("category")
    .populate("subCategory")
};

const deleteRecord = async (productId) => {
    return product.findByIdAndDelete(productId);
};

const getProductById = async (productId) => {
    return product.findById(productId);
};

const updateDetiles = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
};


module.exports = {
    createProduct,
    productList,
    deleteRecord,
    getProductById,
    updateDetiles,
};