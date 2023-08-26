const { PharmacyService } = require("../services");

/** create Pharmacy */
const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const Pharmacy = await PharmacyService.createPharmacy(reqBody);
        if (!Pharmacy) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Pharmacy detiles create successfully!",
            data: { Pharmacy },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get Pharmacy list
const getPharmacyList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        // if (search) {
        //     filter.$or = [
        //         { first_name: { $regex: search, $options: "i" } },
        //         { last_name: { $regex: search, $options: "i" } },
        //     ];
        // }

        const getList = await PharmacyService.getPharmacyList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get Pharmacy list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const PharmacyId = req.params.PharmacyId;
        const PharmacyExists = await PharmacyService.getPharmacyById(PharmacyId);
        if (!PharmacyExists) {
            throw new Error("Pharmacy detiles not found!");
        }

        await PharmacyService.deleteRecord(PharmacyId);

        res.status(200).json({
            success: true,
            message: "Pharmacy detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    deleteRecord
};

