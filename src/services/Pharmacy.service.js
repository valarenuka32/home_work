const { Pharmacy } = require("../models");

/**
 * Create Pharmacy
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
};
const getPharmacyList = async (req, res) => {
    return Pharmacy.find({ $or: [{ is_active: true, price: 57 }] });
};
const deleteRecord = async (travelId) => {
    return Pharmacy.findByIdAndDelete(travelId);
};

const getPharmacyById = async (travelId) => {
    return Pharmacy.findById(travelId);
};

const updateDetails = async (PharmacyId, updateBody) => {
    return Pharmacy.findByIdAndUpdate(PharmacyId, { $set: updateBody })
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    deleteRecord,
    getPharmacyById,
    updateDetails
};