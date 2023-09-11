const { orders } = require("../models");

/**
 * Create orders
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createorders = async (reqBody) => {
    return orders.create(reqBody);
};

const ordersList = async (req, res) => {
    return orders.find()
    .populate("products");
};

const deleteRecord = async (ordersId) => {
    return orders.findByIdAndDelete(ordersId);
};

const getordersById = async (ordersId) => {
    return orders.findById(ordersId);
};

const updateDetiles = async (ordersId, updateBody) => {
    return orders.findByIdAndUpdate(ordersId, { $set: updateBody });
};


module.exports = {
    createorders,
    ordersList,
    deleteRecord,
    getordersById,
    updateDetiles,
};