# Express Server App Readme

## Introduction
This repository contains the source code for an Express.js server application that manages user data and orders. The server is built using TypeScript and MongoDB for data storage. It provides various endpoints for creating, retrieving, updating, and deleting users, as well as adding and retrieving orders for users.

## Getting Started
To run the server locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/alaminhossa1n/l2_assignment-2.git
   ```

2. Install dependencies:
   ```bash
   cd l2_assignment-2
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGO_URI=<your_mongo_db_connection_string>
   ```

4. Start the server:
   ```bash
   npm run start:dev
   ```

## Endpoints

### User Endpoints

#### Create User
- **URL:** `POST /`
- **Request Body:**
  ```json
  {
    "user": {
      "userId": "uniqueId",
      "username": "john_doe",
      "fullName": "John Doe",
      "age": 25,
      "email": "john@example.com",
      "address": "123 Main St"
    }
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User created successfully!",
    "data": { /* User data */ }
  }
  ```

#### Get All Users
- **URL:** `GET /`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Users fetched successfully!",
    "data": [ /* Array of user data */ ]
  }
  ```

#### Get Single User
- **URL:** `GET /:userId`
- **Response:**
  ```json
  {
    "success": true,
    "message": "User fetched successfully!",
    "data": { /* User data */ }
  }
  ```

#### Update User
- **URL:** `PUT /:userId`
- **Request Body:**
  ```json
  {
    "updatedUser": {
      /* Updated user fields */
    }
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User updated successfully!",
    "data": { /* Updated user data */ }
  }
  ```

#### Delete User
- **URL:** `DELETE /:userId`
- **Response:**
  ```json
  {
    "success": true,
    "message": "User deleted successfully!",
    "data": { /* Deleted user data */ }
  }
  ```

### Order Endpoints

#### Add New Order
- **URL:** `PUT /:userId/orders`
- **Request Body:**
  ```json
  {
    "productName": "Product Name",
    "price": 10.99,
    "quantity": 2
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Order created successfully!",
    "data": { /* User data with updated orders */ }
  }
  ```

#### Get Orders by User ID
- **URL:** `GET /:userId/orders`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Orders fetched successfully!",
    "data": { /* Array of orders for the user */ }
  }
  ```

#### Get Total Price by User ID
- **URL:** `GET /:userId/orders/total-price`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Total price calculated successfully!",
    "data": { "totalPrice": 25.98 }
  }
  ```

## Technologies Used
- **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** NoSQL database for storing user and order data.
- **Mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.
- **Zod:** TypeScript-first schema declaration and validation library.

## Scripts
- **lint:** Run ESLint to check for linting errors.
- **start:prod:** Start the server in production mode.
- **start:dev:** Start the server in development mode using `ts-node-dev`.

## Live Demo
Access the live demo of the server [here](https://n-six-ashen.vercel.app/).

## Repository
Find the GitHub repository [here](https://github.com/alaminhossa1n/l2_assignment-2).

Feel free to explore, modify, and use this Express server as a foundation for your own projects! If you have any questions or issues, please don't hesitate to open an issue in the GitHub repository.
