const { Category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createcategory = async (reqBody) => {
  return Category.create(reqBody);
};

module.exports = {
  createcategory
}