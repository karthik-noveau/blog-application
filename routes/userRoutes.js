import express from "express";

import { getAllUsers, loginController, registerController } from "../controllers/userController.js";

//  ************** router object ***************
export const router = express.Router();

//  ************** GET ALL USERS || GET ***************
router.get("/all-users", getAllUsers);

//  ************** CREATE USERS || POST ***************
router.post("/register", registerController);

//  ************** LOGIN || POST ***************
router.post("/login", loginController);
