const { jewelleryService } = require("../services");

/** create jewellery */
const createjewellery = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        // const categoryExists = await categoryService.getUserByEmail(reqBody.email);
        // if (categoryExists) {
        //     throw new Error("User already created by this email!");
        // }

        const jewellery = await jewelleryService.createjewellery(reqBody);
        if (!jewellery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "jewellery detiles create successfully!",
            data: { jewellery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get jewellery list
const getjewelleryList = async (req, res) => {
    try {
        const getList = await jewelleryService.getjewelleryList();

        res.status(200).json({
            success: true,
            message: "jewellery  list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const jewelleryId = req.params.jewelleryId;
        const bjewelleryExists = await jewelleryService.getjewelleryById(jewelleryId);
        if (!bjewelleryExists) {
            throw new Error("jewellery detiles not found!");
        }

        await jewelleryService.deleteRecord(jewelleryId);

        res.status(200).json({
            success: true,
            message: "jewellery detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// update detiles
const updatejewellery = async (req, res) => {
    try {
        const jewelleryId = req.params.jewelleryId;

        const jewelleryExists = await hotelService.gethotelById(jewelleryId);
        if (!jewelleryExists) {
            throw new Error("jewellery not found!");
        }

        await hotelService.updateDetails(jewelleryId, req.body);

        res.status(200).json({
            success: true,
            message: "jewellery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createjewellery,
    getjewelleryList,
    deleteRecord,
    updatejewellery
};

