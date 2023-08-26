const express = require("express");
const { musicValidaton } = require("../../validations");
const { musicControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create music
router.post(
      "/create-music",
      validate(musicValidaton.createMusic),
      musicControler.createMusic
);

// get music list
router.get(
      "/music-list",
      // validate(musicValidaton.getMusicList),
      musicControler.getMusicList
);

// music list delete
router.delete(
      "/delete-music/:musicId",
      // validate(musicValidaton.deleteRecord),
      musicControler.deleteRecord
);

module.exports = router;