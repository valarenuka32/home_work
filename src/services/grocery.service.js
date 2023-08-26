const { grocery } = require("../models");

/**
 * Create grocery
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const creategrocery = async (reqBody) => {
    return grocery.create(reqBody);
};
const getgroceryList = async (req, res) => {
    return grocery.find();
};
const deleteRecord = async (groceryId) => {
    return grocery.findByIdAndDelete(groceryId);
};

const getgroceryById = async (groceryId) => {
    return grocery.findById(groceryId);
};

module.exports = {
    creategrocery,
    getgroceryList,
    deleteRecord,
    getgroceryById
};