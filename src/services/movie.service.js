const { movie } = require("../models");

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createmovie = async (reqBody) => {
    return movie.create(reqBody);
};
const getmovieList = async (req, res) => {
    return movie.find({ $or: [{ is_active: false }] });
};
const deleteRecord = async (movieId) => {
    return movie.findByIdAndDelete(movieId);
};
const getmovieById = async (movieId) => {
    return movie.findById(movieId);
};
const updateDetails = async (movieId, updateBody) => {
    return movie.findByIdAndUpdate(movieId, { $set: updateBody });
}

module.exports = {
    createmovie,
    getmovieList,
    deleteRecord,
    getmovieById,
    updateDetails
};