import { z } from "zod";

const addressValidationSchema = z.object({
    street: z.string({ required_error: 'Street is required' }),
    city: z.string({ required_error: 'City is required' }),
    country: z.string({ required_error: 'Country is required' }),
  });
  
  const orderValidationSchema = z.object({
    productName: z.string({ required_error: 'Product name is required' }),
    price: z.number({ required_error: 'Price is required' }),
    quantity: z.number({ required_error: 'Quantity is required' }),
  });
  
  const userValidationSchema = z.object({
    userId: z.number({ required_error: 'User ID is required' }),
    username: z.string({ required_error: 'Username is required' }),
    password: z.string({ required_error: 'Password is required' }).max(20),
    fullName: z.object({
      firstName: z.string({ required_error: 'First name is required' }),
      lastName: z.string({ required_error: 'Last name is required' }),
    }),
    age: z.number({ required_error: 'Age is required' }),
    email: z.string({ required_error: 'Email is required' }).email(),
    isActive: z.enum(['active', 'inActive'], { required_error: 'isActive is required' }),
    hobbies: z.array(z.string()),
    address: addressValidationSchema,
    orders: z.array(orderValidationSchema),
  });
  
  export default userValidationSchema;