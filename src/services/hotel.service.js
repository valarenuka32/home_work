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
    return User.find();
}

module.exports = {
    createhotel,
    gethotelList
};