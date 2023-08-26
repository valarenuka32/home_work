const { musicService } = require("../services");

/** create music */
const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const music = await musicService.createMusic(reqBody);
        if (!music) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "music detiles create successfully!",
            data: { music },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get music list
const getMusicList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        // if (search) {
        //     filter.$or = [
        //         { first_name: { $regex: search, $options: "i" } },
        //         { last_name: { $regex: search, $options: "i" } },
        //     ];
        // }

        const getList = await musicService.getMusicList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get music list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        const musicExists = await musicService.getmusicById(musicId);
        if (!musicExists) {
            throw new Error("music detiles not found!");
        }

        await musicService.deleteRecord(musicId);

        res.status(200).json({
            success: true,
            message: "music detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createMusic,
    getMusicList,
    deleteRecord
};

