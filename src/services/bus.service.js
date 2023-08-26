const { bus } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => {
    return bus.create(reqBody);
};
const getBusList = async (req, res) => {
    return bus.find({ $or:[{is_active:true,seat_number:65}]});
};
const deleteRecord = async (busId) => {
    return bus.findByIdAndDelete(busId);
};

const getbusById = async (busId) => {
    return bus.findById(busId);
};

module.exports = {
    createBus,
    getBusList,
    deleteRecord,
    getbusById
};