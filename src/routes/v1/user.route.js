const express = require('express');
const { userController } = require('../../controllers');
const { userValidation } = require('../../validations');
const validate  = require('../../middlewares/validate');

const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);
//GET User List
router.get(
    "/list",
    // validate(userValidation.getUserList),
    userController.getUserList
);

module.exports = router;