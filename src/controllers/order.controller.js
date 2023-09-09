const { orderService, orderitemService } = require("../services");

/** create order */
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const order = await orderService.createOrder(reqBody);
        if (!order) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "order detiles create successfully!",
            data: { order },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get order list
const orderList = async (req, res) => {
    try {
        const getList = await orderService.orderList();
        const getDetils = await orderitemService.orderitemList();

        res.status(200).json({
            success: true,
            message: "Get order list successfully!",
            data: getList,getDetils
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderEx = await orderService.getOrderById(orderId);
        if (!orderEx) {
            throw new Error("order detiles not found!");
        }

        await orderService.deleteRecord(orderId);

        res.status(200).json({
            success: true,
            message: "order detiles delete successfully!",
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
        const orderId = req.params.orderId;

        const orderEx = await orderService.getOrderById(orderId);
        if (!orderEx) {
            throw new Error("order not found!");
        }

        await orderService.updateDetiles(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "order details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createOrder,
    orderList,
    deleteRecord,
    updateDetiles
};