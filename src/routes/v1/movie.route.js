const express = require("express");
const { movieValidaton } = require("../../validations");
const { movieControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create movie
router.post(
    "/create-movie",
    validate(movieValidaton.createmovie),
    movieControler.createmovie
);

// get bus list
router.get(
    "/movie-list",
    // validate(movieValidaton.getmovieList),
    movieControler.getmovieList
);

// bus list delete
router.delete(
    "/delete-movie/:movieId",
    // validate(movieValidaton.deleteRecord),
    movieControler.deleteRecord
);

// update
router.put(
    "/update/:movieId",
    movieControler.updateMovie
)

module.exports = router;