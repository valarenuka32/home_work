const { product } = require("../models");

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createproduct = async (reqBody) => {
    return product.create(reqBody);
};
const getproductList = async (req, res) => {
    return product.find();
};
const deleteRecord = async (productId) => {
    return product.findByIdAndDelete(productId);
};

const getproductById = async (productId) => {
    return product.findById(productId);
};

const updateDetails = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody })
};


module.exports = {
    createproduct,
    getproductList,
    deleteRecord,
    getproductById,
    updateDetails
};