const { orderitemService } = require("../services");

/** create orderitem */
const createOrderitem = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const orderitem = await orderitemService.createOrderitem(reqBody);
        if (!orderitem) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "orderitem detiles create successfully!",
            data: { orderitem },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


// get orderitem list
const orderitemList = async (req, res) => {
    try {
        const getList = await orderitemService.orderitemList();

        res.status(200).json({
            success: true,
            message: "Get orderitem list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const orderitemId = req.params.orderitemId;
        const orderitemEx = await orderitemService.getOrderitemById(orderitemId);
        if (!orderitemEx) {
            throw new Error("orderitem detiles not found!");
        }

        await orderitemService.deleteRecord(orderitemId);

        res.status(200).json({
            success: true,
            message: "orderitem detiles delete successfully!",
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
        const orderitemId = req.params.orderitemId;

        const orderitemEx = await orderitemService.getOrderitemById(orderitemId);
        if (!orderitemEx) {
            throw new Error("orderitem not found!");
        }

        await orderitemService.updateDetiles(orderitemId, req.body);

        res.status(200).json({
            success: true,
            message: "orderitem details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createOrderitem,
    orderitemList,
    deleteRecord,
    updateDetiles
};