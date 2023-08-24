const { hotelService } = require("../services");

// create hotel detiles
const createhotel = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const hotel = await hotelService.createhotel(reqBody);
        if (!hotel) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "hotel data create successfully!",
            data: { hotel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get hotel list
const gethotelList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } },
            ];
        }

        const getList = await hotelService.gethotelList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get hotel list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const hotelId = req.params.hotelId;
        const hotelExists = await hotelService.getCategoryById(hotelId);
        if (!hotelExists) {
            throw new Error("hotel detiles not found!");
        }

        await hotelService.deleteRecord(hotelId);

        res.status(200).json({
            success: true,
            message: "hotel detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createhotel,
    gethotelList,
    deleteRecord
};