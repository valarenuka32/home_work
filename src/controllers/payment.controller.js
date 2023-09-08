const { paymentService } = require("../services");

/** create payment */
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const payment = await paymentService.createPayment(reqBody);
        if (!payment) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "payment detiles create successfully!",
            data: { payment },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get payment list
const paymentList = async (req, res) => {
    try {
        const getList = await paymentService.paymentList();

        res.status(200).json({
            success: true,
            message: "Get payment list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecord = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;
        const paymentEx = await paymentService.getpaymentById(paymentId);
        if (!paymentEx) {
            throw new Error("payment detiles not found!");
        }

        await paymentService.deleteRecord(paymentId);

        res.status(200).json({
            success: true,
            message: "payment detiles delete successfully!",
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
        const paymentId = req.params.paymentId;

        const paymentEx = await paymentService.getpaymentById(paymentId);
        if (!paymentEx) {
            throw new Error("payment not found!");
        }

        await paymentService.updateDetiles(paymentId, req.body);

        res.status(200).json({
            success: true,
            message: "payment details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createPayment,
    paymentList,
    deleteRecord,
    updateDetiles
};