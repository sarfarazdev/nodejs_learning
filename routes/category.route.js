import {create,GetAll} from "../controllers/category.controller.js"
import Express from "express"
export const category = Express.Router();

category.route("/category/create").post(create);
category.route("/category/list").get(GetAll);
