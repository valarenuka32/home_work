const { music } = require("../models");

/**
 * Create music
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMusic = async (reqBody) => {
    return music.create(reqBody);
};
const getMusicList = async (req, res) => {
    return music.find({ $or: [{ release_year: 1950, is_active: false }] });
};
const deleteRecord = async (musicId) => {
    return music.findByIdAndDelete(musicId);
};
const getmusicById = async (musicId) => {
    return music.findById(musicId);
};
const updateDetails = async (musicId, updateBody) => {
    return music.findByIdAndUpdate(musicId, { $set: updateBody })
}

module.exports = {
    createMusic,
    getMusicList,
    deleteRecord,
    getmusicById,
    updateDetails
};