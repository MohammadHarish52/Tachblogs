import User from "../model/user.js";
import bcrypt from "bcrypt";

export const signUpUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const userData = {
      username: req.body.username,
      name: req.body.name,
      password: hashedPassword,
    };

    const newUser = new User(userData);

    await newUser.save();

    return res.status(200).json({ message: "Signup successfully" });
  } catch (error) {
    console.error("Error in signUpUser:", error); // Log the error for debugging
    return res.status(500).json({ message: "Something went wrong" });
  }
};
