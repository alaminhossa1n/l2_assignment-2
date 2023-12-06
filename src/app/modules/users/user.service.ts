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
    _id: 0,
  });
  return result;
};

const getSingleUserFromDB = async (id: number) => {
  if (await User.isUserExist(id)) {
    const result = await User.findOne({ userId: id }).select({
      _id: 0,
      password: 0,
    });
    return result;
  } else {
    throw new Error();
  }
};

//update user
const updateUserFromDB = async (id: number, updatedUser: TUser) => {
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new Error("User not Found");
  }
  const result = await User.findOneAndUpdate(
    { userId: id },
    { $set: updatedUser },
    { new: true }
  ).select({ password: 0 });
  return result;
};

//delete user
const deleteUserFromDB = async (id: number) => {
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new Error();
  }

  const result = await User.deleteOne({ userId: id });
  return result;
};

//add orders
const addNewOrdersToDB = async (
  id: number,
  newOrders: {
    productName: string;
    price: number;
    quantity: number;
  }
) => {
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new Error();
  }

  const result = await User.findOneAndUpdate(
    { userId: id },
    { $push: { orders: { $each: [newOrders] } } },
    { returnDocument: "after", projection: { orders: 1 } }
  );
  return result;
};

//Retrieve all orders for a specific user
const getOrdersByID = async (userId: number) => {
  const isUserExist = await User.isUserExist(userId);

  if (!isUserExist) {
    throw new Error();
  }

  const result = await User.find({ userId }, { orders: 1 });
  return result;
};

//Calculate Total Price of Orders for a Specific User
const getTotalPriceByID = async (userId: number) => {
  const isUserExist = await User.isUserExist(userId);

  if (!isUserExist) {
    throw new Error();
  }

  const result = await User.aggregate([
    { $match: { userId } },
    { $unwind: "$orders" },
    { $group: { _id: null, totalPrice: { $sum: "$orders.price" } } },
  ]);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
  addNewOrdersToDB,
  getOrdersByID,
  getTotalPriceByID,
};
