const express = require("express");
const { jewelleryValidaton } = require("../../validations");
const { jewelleryControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create jewellery
router.post(
    "/create-jewellery",
    validate(jewelleryValidaton.createjewellery),
    jewelleryControler.createjewellery
);

// get jewellery list
router.get(
    "/jewellery-list",
    // validate(jewelleryValidaton.getjewelleryList),
    jewelleryControler.getjewelleryList
);

// jewellery list delete
router.delete(
    "/delete-jewellery/:jewelleryId",
    // validate(jewelleryValidaton.deleteRecord),
    jewelleryControler.deleteRecord
);

router.put(
    "/update/:jewelleryId",
    jewelleryControler.updatejewellery
);

module.exports = router;