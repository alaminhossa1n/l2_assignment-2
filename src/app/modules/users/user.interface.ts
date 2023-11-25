export type User = {
  userId: number;
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
