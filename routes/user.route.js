import {signup,login,getAllUsers} from "../controllers/user.controller.js";
import { authentication } from "../middleware/authentication.js";
import Express from "express";
const router = Express.Router()
router.route("/user/signup").post(signup);
router.route("/user/login").post(login);
router.route("/user/get-all-users").get(authentication,getAllUsers);
export default router;