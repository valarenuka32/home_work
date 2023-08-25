const { schoolService } = require("../services");

/** create school */
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const school = await schoolService.createSchool(reqBody);
        if (!school) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "school detiles create successfully!",
            data: { school },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get school list
const getschoolList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        // if (search) {
        //     filter.$or = [
        //         { first_name: { $regex: search, $options: "i" } },
        //         { last_name: { $regex: search, $options: "i" } },
        //     ];
        // }

        const getList = await schoolService.getschoolList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get school list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;
        const schoolExists = await schoolService.getschoolById(schoolId);
        if (!schoolExists) {
            throw new Error("school detiles not found!");
        }

        await schoolService.deleteRecord(schoolId);

        res.status(200).json({
            success: true,
            message: "school detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createSchool,
    getschoolList,
    deleteRecord
};

