const { SubchildCategoryService } = require("../services");

/** create SubchildCategory */
const createSubchildCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const SubchildCategory = await SubchildCategoryService.createSubchildCategory(reqBody);
        if (!SubchildCategory) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "SubchildCategory detiles create successfully!",
            data: { SubchildCategory },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get SubchildCategory list
const SubchildCategoryList = async (req, res) => {
    try {
        const getList = await SubchildCategoryService.SubchildCategoryList();

        res.status(200).json({
            success: true,
            message: "Get SubchildCategory list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const SubchildCategoryId = req.params.SubchildCategoryId;
        const SubchildCategoryEx = await SubchildCategoryService.getSubchildCategoryById(SubchildCategoryId);
        if (!SubchildCategoryEx) {
            throw new Error("SubchildCategory detiles not found!");
        }

        await SubchildCategoryService.deleteRecord(SubchildCategoryId);

        res.status(200).json({
            success: true,
            message: "SubchildCategory detiles delete successfully!",
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
        const SubchildCategoryId = req.params.SubchildCategoryId;

        const SubchildCategoryEx = await SubchildCategoryService.getSubchildCategoryById(SubchildCategoryId);
        if (!SubchildCategoryEx) {
            throw new Error("SubchildCategory not found!");
        }

        await SubchildCategoryService.updateDetiles(SubchildCategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "SubchildCategory details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createSubchildCategory,
    SubchildCategoryList,
    deleteRecord,
    updateDetiles
};