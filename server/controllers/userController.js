import bcrypt from "bcrypt";

import { userModel } from "../models/userModel.js";

//  ************** create user register user ***************
export const registerController = async (req, res) => {
  console.log(req, res);
  try {
    let { username, email, password } = req.body;

    //validation
    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "please fill all fields",
      });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exisites",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;
    // @ bcrypt.hash()
    //-----It refer's to hash the password with a cost factor of 10.
    //     10 refer's to 2^10

    //save new user
    const user = await userModel({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Register callback",
      error,
    });
  }
};

//  ************** get all users ***************
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      success: true,
      message: "all users data",
      usersCount: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all users",
      error,
    });
  }
};

//  ************** login ***************
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "please provide email and password",
      });
    }
    const user = await userModel.findOne({ email });
    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid password",
      });
    }
    return res.status(200).send({
      success: true,
      message: "login succussfully",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in Login callback",
      error,
    });
  }
};
