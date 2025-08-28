import User from "../models/user.js";
import bcrypt from "bcryptjs";

// REGISTER
const registerUser = async ({ name, phone,password,age,gender }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, phone,password:hashedPassword,age,gender });
  return await user.save();
};

// LOGIN
const loginUser = async (data) => {
  const user = await User.findOne({ phone: data.phone });
  if (!user) {
    throw new Error("User not found with this phone number");
  }

  const isPasswordMatch = bcrypt.compareSync(data.password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Incorrect phone or password");
  }

  return user;
};

export default {
  registerUser,
  loginUser,
};
