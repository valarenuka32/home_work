const { category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createcategory = async (reqBody) => {
  return category.create(reqBody);
};
const getUserList = async (req, res) => {
  return category.find({$or:[{is_active:true}]});
}

module.exports = {
  createcategory,
  getUserList
};