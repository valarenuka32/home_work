const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const userEx = await userService.getUserByName(reqBody.first_name);
        if (userEx) {
            throw new Error(`please add other user this ${userEx.first_name} user already created`);
        }

        const user=await userService.createUser(reqBody);

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
const userList = async (req, res) => {
    try {
        const getList = await userService.userList();

        res.status(200).json({
            success: true,
            message: "Get user list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userEx = await userService.getUserById(userId);
        if (!userEx) {
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

// // update detiles
const updateDetiles = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userEx = await userService.getUserById(userId);
        if (!userEx) {
            throw new Error("user not found!");
        }

        await userService.updateDetiles(userId, req.body);

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
    userList,
    deleteRecord,
    updateDetiles
};

