const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

const getUserList = async (req, res) => {
  return User.find();
};

const deleteRecord = async (userId) => {
  return User.findByIdAndDelete(userId);
};

const getuserById = async (userId) => {
  return User.findById(userId);
};

const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody })
};
module.exports = {
  createUser,
  getUserList,
  deleteRecord,
  getuserById,
  updateDetails
};