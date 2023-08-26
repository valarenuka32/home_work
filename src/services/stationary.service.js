const { stationary } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createstationary = async (reqBody) => {
    return stationary.create(reqBody);
};
const getstationaryList = async (req, res) => {
    return stationary.find({$or:[{quantity:3,price:80}]});
};
const deleteRecord = async (stationaryId) => {
    return stationary.findByIdAndDelete(stationaryId);
};

const getstationaryById = async (stationaryId) => {
    return stationary.findById(stationaryId);
};

module.exports = {
    createstationary,
    getstationaryList,
    deleteRecord,
    getstationaryById
};