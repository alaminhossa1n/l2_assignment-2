import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUser = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await UserModel.findOne({ userId: id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUser,
  getSingleUser,
};
