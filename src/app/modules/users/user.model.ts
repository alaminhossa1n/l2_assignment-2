import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const orderSchema = new Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

//schema
const userSchema = new Schema<TUser, UserModel>({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: ["active", "inActive"],
  hobbies: [{ type: String }],
  address: { type: addressSchema, required: true },
  orders: [{ type: orderSchema }],
});

//post
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await User.findOne({ userId: id });
  return existingUser;
};

// model
export const User = model<TUser, UserModel>("User", userSchema);
