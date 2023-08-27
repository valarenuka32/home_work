const { stationaryService } = require("../services");

/** create stationary */
const createstationary = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const stationary = await stationaryService.createstationary(reqBody);
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stationary detiles create successfully!",
            data: { stationary },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get stationary list
const getstationaryList = async (req, res) => {
    try {
        const getList = await stationaryService.getstationaryList();

        res.status(200).json({
            success: true,
            message: "Get stationary list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;
        const stationaryExists = await stationaryService.getstationaryById(stationaryId);
        if (!stationaryExists) {
            throw new Error("stationary detiles not found!");
        }

        await stationaryService.deleteRecord(stationaryId);

        res.status(200).json({
            success: true,
            message: "stationary detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createstationary,
    getstationaryList,
    deleteRecord
};

