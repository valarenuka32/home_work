const { payment } = require("../models");

/**
 * Create payment
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createPayment = async (reqBody) => {
    return payment.create(reqBody);
};

const paymentList = async (req, res) => {
    return payment.find()
    .populate("users")
    .populate("orders");
};

const deleteRecord = async (paymentId) => {
    return payment.findByIdAndDelete(paymentId);
};

const getpaymentById = async (paymentId) => {
    return payment.findById(paymentId);
};

const updateDetiles = async (paymentId, updateBody) => {
    return payment.findByIdAndUpdate(paymentId, { $set: updateBody });
};


module.exports = {
    createPayment,
    paymentList,
    deleteRecord,
    getpaymentById,
    updateDetiles,
};