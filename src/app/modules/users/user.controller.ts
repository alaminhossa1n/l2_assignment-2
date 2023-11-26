import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userValidationSchema from "./user.validation";

//create user
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const zodParseData = userValidationSchema.parse(userData);

    // call service
    const result = await UserServices.createUserIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: true,
      message: err.message || "Something Wrong",
      data: err,
    });
  }
};

// get users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "Something Wrong",
      data: err,
    });
  }
};

//get single student
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

//update a student
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { updatedUser } = req.body;
    const zodParseData = userValidationSchema.parse(updatedUser);

    // call service
    const result = await UserServices.updateUserFromDB(userId, zodParseData);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

//delete a student
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // call service
    const result = await UserServices.deleteUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const addNewOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const newOrder = req.body;
    console.log(newOrder);

    // call service
    const result = await UserServices.addNewOrdersToDB(userId, newOrder);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      success: false,
      message: "User not found...",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addNewOrder,
};
