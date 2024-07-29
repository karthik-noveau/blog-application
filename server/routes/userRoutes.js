import express from "express";

import {
  getAllUsers,
  loginController,
  registerController,
} from "../controllers/userController.js";

//  ************** router object ***************
export const userRoutes = express.Router();

//  create user || POST
userRoutes.post("/register", registerController);

//  get all users || GET
userRoutes.get("/all-users", getAllUsers);

// login || POST
userRoutes.post("/login", loginController);
