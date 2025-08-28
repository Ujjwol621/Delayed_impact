import authController from "../controllers/userController.js";
import express from 'express'

const authRoute=express.Router();

authRoute.post("/register",authController.regUserController);
authRoute.post("/login",authController.loginUser);
export default authRoute;
