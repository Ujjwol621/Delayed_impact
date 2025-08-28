import authService from "../services/userService.js";

// REGISTER CONTROLLER
const regUserController = async (req, res) => {
  const input = req.body;
  // console.log(req.body);
  if (!input.password) {
    return res.status(400).send("Password is required");
  }

  if (!input.confirmPassword) {
    return res.status(400).send("Confirm Password is required");
  }

  if (input.password !== input.confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }

  try {
    const data = await authService.registerUser(input);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// LOGIN CONTROLLER
const loginUser = async (req, res) => {
  try {
    const input = req.body;

    if (!input.phone) {
      return res.status(400).send("Phone number is required");
    }
    if (!input.password) {
      return res.status(400).send("Password is required");
    }

    const data = await authService.loginUser(input);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  regUserController,
  loginUser,
};
