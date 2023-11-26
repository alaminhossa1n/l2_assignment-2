import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:userId", UserController.getSingleUser);
router.put("/:userId", UserController.updateUser);
router.delete("/:userId", UserController.deleteUser);
router.put("/:userId/orders", UserController.addNewOrder);

export const UserRoutes = router;
