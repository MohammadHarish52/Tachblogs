import User from "../model/user.js";

export const signUpUser = async (req, res) => {
  try {
    const userData = req.body; // Renamed from USer to userData for consistency

    const newUser = new User(userData); // Used consistent naming for the model

    await newUser.save();

    return res.status(200).json({ message: "Signup successfully" });
  } catch (error) {
    console.error("Error in signUpUser:", error); // Log the error for debugging
    return res.status(500).json({ message: "Something went wrong" });
  }
};
