const { busService } = require("../services");

/** create user */
const createBus = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const bus = await busService.createBus(reqBody);
        if (!bus) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "bus detiles create successfully!",
            data: { bus },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get bus list
const getBusList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } },
            ];
        }

        const getList = await busService.getBusList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get bus list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const busId = req.params.busId;
        const busExists = await busService.getbusById(busId);
        if (!busExists) {
            throw new Error("bus detiles not found!");
        }

        await busService.deleteRecord(busId);

        res.status(200).json({
            success: true,
            message: "bus detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createBus,
    getBusList,
    deleteRecord
};

