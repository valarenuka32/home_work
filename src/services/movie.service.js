const { movie } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createmovie = async (reqBody) => {
    return movie.create(reqBody);
};
const getmovieList = async (req, res) => {
    return movie.find();
};
const deleteRecord = async (movieId) => {
    return movie.findByIdAndDelete(movieId);
};

const getmovieById = async (movieId) => {
    return movie.findById(movieId);
};

module.exports = {
    createmovie,
    getmovieList,
    deleteRecord,
    getmovieById
};