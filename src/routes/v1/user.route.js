const express = require('express');
const { userController } = require('../../controllers');
const { userValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

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

// user list delete
router.delete(
    "/delete-user/:userId",
    // validate(userValidation.deleteRecord),
    userController.deleteRecord
);

// update
router.put(
    "/update/:userId",
    userController.updateUser
);

module.exports = router;