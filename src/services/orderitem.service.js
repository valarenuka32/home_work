const { orderItem } = require("../models");

/**
 * Create orderitem
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createOrderitem = async (reqBody) => {
    return orderItem.create(reqBody);
};

const orderitemList = async (req, res) => {
    return orderItem.find({$or:[{is_active:true,Quantity:10}]})
    .populate("orders")
    .populate("products")
};

const deleteRecord = async (orderitemId) => {
    return orderItem.findByIdAndDelete(orderitemId);
};

const getOrderitemById = async (orderitemId) => {
    return orderItem.findById(orderitemId);
};

const updateDetiles = async (orderitemId, updateBody) => {
    return orderItem.findByIdAndUpdate(orderitemId, { $set: updateBody });
};


module.exports = {
    createOrderitem,
    orderitemList,
    deleteRecord,
    getOrderitemById,
    updateDetiles,
};