import {signup,login,getAllUsers, update, deleteUser} from "../controllers/user.controller.js";
import { authentication } from "../middleware/authentication.js";
import Express from "express";
export const user = Express.Router()
user.route("/user/signup").post(signup);
user.route("/user/login").post(login);
user.route("/user/get-all-users").get(authentication,getAllUsers);
user.route("/user/update").put(authentication,update);
user.route("/user/delete").delete(authentication,deleteUser);
