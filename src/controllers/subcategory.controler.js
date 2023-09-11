const { subCategoryService } = require("../services");

/** create subCategory */
const createsubCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const subCategory = await subCategoryService.createsubCategory(reqBody);
        if (!subCategory) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "subCategory detiles create successfully!",
            data: { subCategory },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get subCategory list
const subCategoryList = async (req, res) => {
    try {
        const getList = await subCategoryService.subCategoryList();

        res.status(200).json({
            success: true,
            message: "Get subCategory list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const subCategoryId = req.params.subCategoryId;
        const subCategoryEx = await subCategoryService.getsubCategoryById(subCategoryId);
        if (!subCategoryEx) {
            throw new Error("subCategory detiles not found!");
        }

        await subCategoryService.deleteRecord(subCategoryId);

        res.status(200).json({
            success: true,
            message: "subCategory detiles delete successfully!",
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
        const subCategoryId = req.params.subCategoryId;

        const subCategoryEx = await subCategoryService.getsubCategoryById(subCategoryId);
        if (!subCategoryEx) {
            throw new Error("subCategory not found!");
        }

        await subCategoryService.updateDetiles(subCategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "subCategory details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createsubCategory,
    subCategoryList,
    deleteRecord,
    updateDetiles
};