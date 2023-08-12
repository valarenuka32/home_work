const { categoryService } = require("../services");

/** create user */
const createcategory = async (req, res) => {
    try {
        const reqBody = req.body;

        // console.log(reqBody, '+++++++++++ reqBody.email');
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
            message: "User create successfully!",
            data: { category },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get user list
const getCategoryList = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    createcategory,
    getCategoryList
}