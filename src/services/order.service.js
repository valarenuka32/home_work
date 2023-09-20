const { order } = require("../models");

/**
 * Create order
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createOrder = async (reqBody) => {
    return order.create(reqBody);
};

const orderList = async (req, res) => {
    return order.find({$or:[{is_active:false}]})
    .populate("user")
};

const deleteRecord = async (orderId) => {
    return order.findByIdAndDelete(orderId);
};

const getOrderById = async (orderId) => {
    return order.findById(orderId);
};

const updateDetiles = async (orderId, updateBody) => {
    return order.findByIdAndUpdate(orderId, { $set: updateBody });
};


module.exports = {
    createOrder,
    orderList,
    deleteRecord,
    getOrderById,
    updateDetiles,
};