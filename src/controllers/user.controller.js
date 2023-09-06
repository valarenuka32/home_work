const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "user detiles create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get user list
const getUserList = async (req, res) => {
    try {
        const getList = await userService.getUserList();

        res.status(200).json({
            success: true,
            message: "Get user list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("user detiles not found!");
        }

        await userService.deleteRecord(userId);

        res.status(200).json({
            success: true,
            message: "user detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// update detiles
const updateDetiles = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("user not found!");
        }

        await userService.updateDetails(userId, req.body);

        res.status(200).json({
            success: true,
            message: "user details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createUser,
    getUserList,
    deleteRecord,
    updateDetiles
};

