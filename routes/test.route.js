import {AllData,writeFile} from "../controllers/test.controller.js"
import Express from "express"
export const router = Express.Router();

router.route("/test/all-data").get(AllData);
router.route("/test/create").post(writeFile);
//route_package.(jis url per chelana hai).method=get,post,put,delete(jis module chelana hai is route per thik h)
export default router;