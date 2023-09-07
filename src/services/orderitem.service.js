const { orderitem } = require("../models");

/**
 * Create orderitem
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createOrderitem = async (reqBody) => {
    return orderitem.create(reqBody);
};

const orderitemList = async (req, res) => {
    return orderitem.find();
};

const deleteRecord = async (orderitemId) => {
    return orderitem.findByIdAndDelete(orderitemId);
};

const getOrderitemById = async (orderitemId) => {
    return orderitem.findById(orderitemId);
};

const updateDetiles = async (orderitemId, updateBody) => {
    return orderitem.findByIdAndUpdate(orderitemId, { $set: updateBody });
};


module.exports = {
    createOrderitem,
    orderitemList,
    deleteRecord,
    getOrderitemById,
    updateDetiles,
};