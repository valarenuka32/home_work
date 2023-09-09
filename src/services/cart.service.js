const { cart } = require("../models");

/**
 * Create cart
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createcart = async (reqBody) => {
    return cart.create(reqBody);
};

const cartList = async (req, res) => {
    return cart.find()
    .populate("users")
    .populate("products")
};

const deleteRecord = async (cartId) => {
    return cart.findByIdAndDelete(cartId);
};

const getCartById = async (cartId) => {
    return cart.findById(cartId);
};

const updateDetiles = async (cartId, updateBody) => {
    return cart.findByIdAndUpdate(cartId, { $set: updateBody });
};


module.exports = {
    createcart,
    cartList,
    deleteRecord,
    getCartById,
    updateDetiles,
};