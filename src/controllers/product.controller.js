const { productService } = require("../services");

/** create product */
const createproduct = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const product = await productService.createproduct(reqBody);
        if (!product) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "product detiles create successfully!",
            data: { product },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get product list
const getproductList = async (req, res) => {
    try {
        const getList = await productService.getgroceryList();

        res.status(200).json({
            success: true,
            message: "product movie list successfully!",
            data: product,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const productyId = req.params.productyId;
        const productExists = await productService.getproductById(productyId);
        if (!productExists) {
            throw new Error("product detiles not found!");
        }

        await productService.deleteRecord(productyId);

        res.status(200).json({
            success: true,
            message: "product detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createproduct,
    getproductList,
    deleteRecord
};

