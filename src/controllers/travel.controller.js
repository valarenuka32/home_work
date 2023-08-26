const { travelService } = require("../services");

/** create travel */
const createTravel = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const travel = await travelService.createTravel(reqBody);
        if (!travel) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "travel detiles create successfully!",
            data: { travel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get travel list
const getTravelList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        // if (search) {
        //     filter.$or = [
        //         { first_name: { $regex: search, $options: "i" } },
        //         { last_name: { $regex: search, $options: "i" } },
        //     ];
        // }

        const getList = await travelService.getTravelList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get travel list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const travelId = req.params.travelId;
        const travelExists = await travelService.gettravelById(travelId);
        if (!travelExists) {
            throw new Error("travel detiles not found!");
        }

        await travelService.deleteRecord(travelId);

        res.status(200).json({
            success: true,
            message: "travel detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createTravel,
    getTravelList,
    deleteRecord
};

