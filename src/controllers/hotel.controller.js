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
        const getList = await hotelService.gethotelList();

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
        const hotelExists = await hotelService.gethotelById(hotelId);
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

// update detiles
const updatehoteldetiles = async (req, res) => {
    try {
        const hotelId = req.params.hotelId;

        const hotelExists = await hotelService.gethotelById(hotelId);
        if (!hotelExists) {
            throw new Error("hotel not found!");
        }

        await hotelService.updateDetails(hotelId, req.body);

        res.status(200).json({
            success: true,
            message: "hotel details update successfully!",
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
    deleteRecord,
    updatehoteldetiles
};