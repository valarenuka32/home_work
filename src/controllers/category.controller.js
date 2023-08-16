const{ categoryService }=require("../services");

/** create user */
const createcategory = async (req, res) => {
    try {
        const reqBody = req.body;

        console.log(reqBody, '+++++++++++ reqBody.email');
        const userExists = await categoryService.getUserByEmail(reqBody.email);
        if (userExists) {
            throw new Error("User already created by this email!");
        }

        const user = await userService.createcategory(reqBody);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "User create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports={
    createcategory
}