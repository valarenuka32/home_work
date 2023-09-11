const { cartService,productService } = require("../services");

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

// get cart list
const cartList = async (req, res) => {
    try {
        const getList = await cartService.cartList();
        const getDetiles = await productService.productList();

        res.status(200).json({
            success: true,
            message: "Get cart list successfully!",
            data: getList,getDetiles
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const cartEx = await cartService.getCartById(cartId);
        if (!cartEx) {
            throw new Error("cart detiles not found!");
        }

        await cartService.deleteRecord(cartId);

        res.status(200).json({
            success: true,
            message: "cart detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// // update detiles
const updateDetiles = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cartEx = await cartService.getCartById(cartId);
        if (!cartEx) {
            throw new Error("cart not found!");
        }

        await cartService.updateDetiles(cartId, req.body);

        res.status(200).json({
            success: true,
            message: "cart details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createcart,
    cartList,
    deleteRecord,
    updateDetiles
};