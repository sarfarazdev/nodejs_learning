import {signup,login} from "../controllers/user.controller.js";
import Express from "express";
const router = Express.Router()
router.route("/user/signup").post(signup);
router.route("/user/login").post(login);
export default router;