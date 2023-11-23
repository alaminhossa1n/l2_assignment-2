import { User } from "./users/user.interface";
import { UserModel } from "./users/user.model";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};

