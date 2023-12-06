/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userValidationSchema from "./user.validation";

//create user
const createUser = async (req: Request, res: Response) => {
  try {
    const zodParseData = userValidationSchema.parse(req.body);

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
    const result = await UserServices.getSingleUserFromDB(Number(userId));

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
    const zodParseData = userValidationSchema.parse(req.body);

    // call service
    const result = await UserServices.updateUserFromDB(
      Number(userId),
      zodParseData
    );

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
    const result = await UserServices.deleteUserFromDB(Number(userId));

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
//add new order
const addNewOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const newOrder = req.body;

    // call service
    const result = await UserServices.addNewOrdersToDB(
      Number(userId),
      newOrder
    );

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

//get order by id
const getOrdersById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // call service
    const result = await UserServices.getOrdersByID(Number(userId));

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
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

// count total price by id
const getPriceById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // call service
    const result = await UserServices.getTotalPriceByID(Number(userId));

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
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
  getOrdersById,
  getPriceById,
};
