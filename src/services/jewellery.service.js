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
    return jewellery.find({$or:[{price:100000,is_active:false}]});;
};
const deleteRecord = async (jewelleryId) => {
    return jewellery.findByIdAndDelete(jewelleryId);
};

const getjewelleryById = async (jewelleryId) => {
    return jewellery.findById(jewelleryId);
};

const updateDetails = async (jewelleryId, updateBody) => {
    return jewellery.findByIdAndUpdate(jewelleryId, { $set: updateBody });
};

module.exports = {
    createjewellery,
    getjewelleryList,
    deleteRecord,
    getjewelleryById,
    updateDetails
};