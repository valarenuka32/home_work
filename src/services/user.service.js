const { user } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createUser = async (reqBody) => {
    return user.create(reqBody);
};

const userList = async (req, res) => {
    return user.find();
};

const deleteRecord = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const getUserById = async (userId) => {
    return user.findById(userId);
};

const updateDetiles = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const getUserByName = async (first_name) => {
    return user.findOne({ first_name });
}


module.exports = {
    createUser,
    userList,
    deleteRecord,
    getUserById,
    updateDetiles,
    getUserByName
};