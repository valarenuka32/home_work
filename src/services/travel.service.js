const { travel } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createTravel = async (reqBody) => {
    return travel.create(reqBody);
};
const getTravelList = async (req, res) => {
    return travel.find();
};
const deleteRecord = async (travelId) => {
    return travel.findByIdAndDelete(travelId);
};

const gettravelById = async (travelId) => {
    return travel.findById(travelId);
};

module.exports = {
    createTravel,
    getTravelList,
    deleteRecord,
    gettravelById
};