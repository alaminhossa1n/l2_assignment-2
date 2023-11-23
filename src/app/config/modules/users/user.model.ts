import { Schema, model } from "mongoose";
import { User } from "./user.interface";

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
const userSchema = new Schema<User>({
  userId: { type: Number, required: true },
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

// model
const User = model<User>("User", userSchema);
