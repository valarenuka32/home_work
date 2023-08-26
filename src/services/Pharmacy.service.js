const { Pharmacy } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
};
const getPharmacyList = async (req, res) => {
    return Pharmacy.find();
};
const deleteRecord = async (travelId) => {
    return Pharmacy.findByIdAndDelete(travelId);
};

const getPharmacyById = async (travelId) => {
    return Pharmacy.findById(travelId);
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    deleteRecord,
    getPharmacyById
};