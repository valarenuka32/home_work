const { school } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createSchool = async (reqBody) => {
    return school.create(reqBody);
};
const getschoolList = async (req, res) => {
    return school.find();
};
const deleteRecord = async (schoolId) => {
    return school.findByIdAndDelete(schoolId);
};

const getschoolById = async (schoolId) => {
    return school.findById(schoolId);
};

module.exports = {
    createSchool,
    getschoolList,
    deleteRecord,
    getschoolById
};