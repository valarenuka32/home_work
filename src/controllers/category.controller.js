const { categoryService, userService, productService } = require("../services");

/** create category */
const createcategory = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const category = await categoryService.createcategory(reqBody);
        if (!category) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "category create successfully!",
            data: { category },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get category list
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList();
        const getuser = await userService.getUserList();
        const getdetiles = await productService.getproductList();

        res.status(200).json({
            success: true,
            message: "Get category list successfully!",
            data: getList,
            getuser,
            getdetiles
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// delete category
const deleteRecord = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("category detiles not found!");
        }

        await categoryService.deleteRecord(categoryId);

        res.status(200).json({
            success: true,
            message: "category detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
// update detiles
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("category not found!");
        }

        await categoryService.updateDetails(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "category details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createcategory,
    getCategoryList,
    deleteRecord,
    updateCategory
};