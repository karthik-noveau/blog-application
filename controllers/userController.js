import { userModel } from "../models/userModel.js";

//  ************** create user register user ***************
export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
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
    //save new user
    const newUser = await userModel({ username, email, password });
    await newUser.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      newUser,
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
export const getAllUsers = () => {};

//  ************** login ***************
export const loginController = () => {};
