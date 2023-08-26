const { hotel } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createhotel = async (reqBody) => {
    return hotel.create(reqBody);
};
const gethotelList = async (req, res) => {
    return hotel.find({$or:[{room_no:101,is_active:true}]});
};
const deleteRecord = async (hotelId) => {
    return hotel.findByIdAndDelete(hotelId);
};

const getCategoryById = async (hotelId) => {
    return hotel.findById(hotelId);
};

module.exports = {
    createhotel,
    gethotelList,
    deleteRecord,
    getCategoryById
};