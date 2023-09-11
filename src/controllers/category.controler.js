const { categoryService ,subCategoryService} = require("../services");

/** create category */
const createcategory = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const category = await categoryService.createcategory(reqBody);
        if (!category) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "category detiles create successfully!",
            data: { category },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get category list
const categoryList = async (req, res) => {
    try {
        const getList = await categoryService.categoryList();
        const getDetiles = await subCategoryService.subCategoryList();

        res.status(200).json({
            success: true,
            message: "Get category list successfully!",
            data: getList,getDetiles
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryEx = await categoryService.getcategoryById(categoryId);
        if (!categoryEx) {
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

// // update detiles
const updateDetiles = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryEx = await categoryService.getcategoryById(categoryId);
        if (!categoryEx) {
            throw new Error("category not found!");
        }

        await categoryService.updateDetiles(categoryId, req.body);

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
    categoryList,
    deleteRecord,
    updateDetiles
};