const { music } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMusic = async (reqBody) => {
    return music.create(reqBody);
};
const getMusicList = async (req, res) => {
    return music.find();
};
const deleteRecord = async (musicId) => {
    return music.findByIdAndDelete(musicId);
};

const getmusicById = async (musicId) => {
    return music.findById(musicId);
};

module.exports = {
    createMusic,
    getMusicList,
    deleteRecord,
    getmusicById
};