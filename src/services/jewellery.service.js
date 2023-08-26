const { jewellery } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createjewellery = async (reqBody) => {
    return jewellery.create(reqBody);
};
const getjewelleryList = async (req, res) => {
    return jewellery.find();
};
const deleteRecord = async (jewelleryId) => {
    return jewellery.findByIdAndDelete(jewelleryId);
};

const getjewelleryById = async (jewelleryId) => {
    return jewellery.findById(jewelleryId);
};

module.exports = {
    createjewellery,
    getjewelleryList,
    deleteRecord,
    getjewelleryById
};