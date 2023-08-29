const { travel } = require("../models");

/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createTravel = async (reqBody) => {
    return travel.create(reqBody);
};
const getTravelList = async (req, res) => {
    return travel.find({$or:[{is_active:true,payment:7000}]});
};
const deleteRecord = async (travelId) => {
    return travel.findByIdAndDelete(travelId);
};

const gettravelById = async (travelId) => {
    return travel.findById(travelId);
};

const updateDetails = async (travelId, updateBody) => {
    return travel.findByIdAndUpdate(travelId, { $set: updateBody })
};

module.exports = {
    createTravel,
    getTravelList,
    deleteRecord,
    gettravelById,
    updateDetails
};