const { userService, categoryService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    // console.log(reqBody);
    // const userExists = await userService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: 'user crte succesfully',
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get user list
const getUserList = async (req, res) => {
  try {
    const getDetails = await userService.getUserList();
    const getCategory = await categoryService.getCategoryList();

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
      getCategory
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete list
const deleteRecord = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await musicService.getuserById(userId);
    if (!userExists) {
      throw new Error("user detiles not found!");
    }

    await musicService.deleteRecord(userId);

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
module.exports = {
  createUser,
  getUserList,
  deleteRecord
}

