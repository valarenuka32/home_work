const express = require("express");
const { groceryValidaton } = require("../../validations");
const { groceryControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create grocery
router.post(
    "/create-grocery",
    validate(groceryValidaton.creategrocery),
    groceryControler.creategrocery
);

// get grocery list
router.get(
    "/grocery-list",
    // validate(groceryValidaton.getgroceryList),
    groceryControler.getgroceryList
);

// grocery list delete
router.delete(
    "/delete-grocery/:groceryId",
    // validate(groceryValidaton.deleteRecord),
    groceryControler.deleteRecord
);

// update
router.put(
    "/update/:groceryId",
    groceryControler.updategrocery
);

module.exports = router;