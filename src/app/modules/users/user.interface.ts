import { Model } from "mongoose";

export type TUser = {
  userId: string;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: "active" | "inActive";
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: {
    productName: string;
    price: number;
    quantity: number;
  }[];
};

export interface UserModel extends Model<TUser> {
  isUserExist(id: string): Promise<TUser | null>;
}
