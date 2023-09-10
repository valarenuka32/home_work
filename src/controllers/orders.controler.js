const { ordersService } = require("../services");

/** create orders */
const createorders = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const orders = await ordersService.createorders(reqBody);
        if (!orders) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "orders detiles create successfully!",
            data: { orders },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get orders list
const ordersList = async (req, res) => {
    try {
        const getList = await ordersService.ordersList();

        res.status(200).json({
            success: true,
            message: "Get orders list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const ordersId = req.params.ordersId;
        const ordersEx = await ordersService.getordersById(ordersId);
        if (!ordersEx) {
            throw new Error("orders detiles not found!");
        }

        await ordersService.deleteRecord(ordersId);

        res.status(200).json({
            success: true,
            message: "orders detiles delete successfully!",
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
        const ordersId = req.params.ordersId;

        const ordersEx = await ordersService.getordersById(ordersId);
        if (!ordersEx) {
            throw new Error("orders not found!");
        }

        await ordersService.updateDetiles(ordersId, req.body);

        res.status(200).json({
            success: true,
            message: "orders details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createorders,
    ordersList,
    deleteRecord,
    updateDetiles
};