const { productService } = require("../services");

/** create user */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const product = await productService.createProduct(reqBody);
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

// // get product list
const productList = async (req, res) => {
    try {
        const getList = await productService.productList();

        res.status(200).json({
            success: true,
            message: "Get product list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const productId = req.params.productId;
        const productEx = await productService.getProductById(productId);
        if (!productEx) {
            throw new Error("product detiles not found!");
        }

        await productService.deleteRecord(productId);

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

// // update detiles
const updateDetiles = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productEx = await productService.getProductById(productId);
        if (!productEx) {
            throw new Error("product not found!");
        }

        await productService.updateDetiles(productId, req.body);

        res.status(200).json({
            success: true,
            message: "product details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createProduct,
    productList,
    deleteRecord,
    updateDetiles
};