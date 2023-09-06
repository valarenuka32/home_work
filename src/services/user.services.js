const { user } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createUser = async (reqBody) => {
    return user.create(reqBody);
};

const getUserList = async (req, res) => {
    return user.find({ $or: [{ is_active: true }] });
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


module.exports = {
    createUser,
    getUserList,
    deleteRecord,
    getUserById,
    updateDetiles
};