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



module.exports = {
    createhotel
}