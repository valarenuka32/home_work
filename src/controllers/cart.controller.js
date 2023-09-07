const { cartService } = require("../services");

/** create cart */
const createcart = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const cart = await cartService.createcart(reqBody);
        if (!cart) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "cart detiles create successfully!",
            data: { cart },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createcart,
};