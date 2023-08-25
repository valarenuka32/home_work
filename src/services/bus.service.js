const { bus } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => {
    return bus.create( { $or:[{is_active:true}] } ); 
};
const getBusList = async (req, res) => {
    return bus.find();
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