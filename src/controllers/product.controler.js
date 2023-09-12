const { productService } = require("../services");

/** create poduct */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        if (req.file) {
            reqBody.product_image = req.file.filename;
        } else {
            throw new Error("product image is required");
        }

        const createProduct = await productService.createProduct(reqBody);
        res.status(200).json({
            success: true,
            message: "product detiles create successfully!",
            data: { createProduct },
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