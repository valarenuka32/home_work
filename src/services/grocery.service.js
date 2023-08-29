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
    return grocery.find({$or:[{quantity:8,is_active:false}]});
};
const deleteRecord = async (groceryId) => {
    return grocery.findByIdAndDelete(groceryId);
};

const getgroceryById = async (groceryId) => {
    return grocery.findById(groceryId);
};

const updateDetails = async (groceryId, updateBody) => {
    return grocery.findByIdAndUpdate(groceryId, { $set: updateBody });
};
module.exports = {
    creategrocery,
    getgroceryList,
    deleteRecord,
    getgroceryById,
    updateDetails
};