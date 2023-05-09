import express from "express";
const Router = express.Router();
import {
  register,
  login,
  updateUser,
  logout,
} from "../controllers/authController.js";

import authenticateUser from "../middlewares/auth.js";

Router.route("/register").post(register);

Router.route("/login").post(login);

Router.route("/updateUser").patch(authenticateUser, updateUser);

Router.get("/logout", logout);

export default Router;
