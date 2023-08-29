const { groceryService } = require("../services");

/** create grocery */
const creategrocery = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const grocery = await groceryService.creategrocery(reqBody);
        if (!grocery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "grocery detiles create successfully!",
            data: { grocery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get grocery list
const getgroceryList = async (req, res) => {
    try {
        const getList = await groceryService.getgroceryList();

        res.status(200).json({
            success: true,
            message: "grocery movie list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const groceryId = req.params.groceryId;
        const groceryExists = await groceryService.getgroceryById(groceryId);
        if (!groceryExists) {
            throw new Error("grocery detiles not found!");
        }

        await groceryService.deleteRecord(groceryId);

        res.status(200).json({
            success: true,
            message: "grocery detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// update detiles
const updategrocery = async (req, res) => {
    try {
        const groceryId = req.params.groceryId;

        const busExists = await groceryService.getgroceryById(groceryId);
        if (!busExists) {
            throw new Error("grocery not found!");
        }

        await groceryService.updateDetails(groceryId, req.body);

        res.status(200).json({
            success: true,
            message: "grocery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    creategrocery,
    getgroceryList,
    deleteRecord,
    updategrocery
};

