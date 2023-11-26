import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExist(userData.userId)) {
    throw new Error("User already exists..");
  }
  const result = await User.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  if (await User.isUserExist(id)) {
    const result = await User.findOne({ userId: id });
    return result;
  } else {
    throw new Error();
  }
};

//update user
const updateUserFromDB = async (id: string, updatedUser: TUser) => {
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new Error();
  }

  const result = await User.updateOne({ userId: id }, { $set: updatedUser });
  return result;
};

//delete user
const deleteUserFromDB = async (id: string) => {
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new Error();
  }

  const result = await User.deleteOne({ userId: id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB
};
