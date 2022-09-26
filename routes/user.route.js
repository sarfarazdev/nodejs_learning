import {signup} from "../controllers/user.controller.js";
import Express from "express";
const router = Express.Router()
router.route("/user/signup").post(signup);
export default router;