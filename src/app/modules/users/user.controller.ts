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
  } catch (err) {
    console.log(err);
  }
};

// get users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUser();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get single student
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUser(userId);
    console.log(userId);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
