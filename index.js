import express from "express";
import fs from "fs";
import path from "path";

import test from "./routes/test.route.js";
import {user} from "./routes/user.route.js";
import {category} from "./routes/category.route.js";
import {subcategory} from "./routes/sub.category.route.js";
import {product} from "./routes/product.route.js";
import {reviewrating} from "./routes/review.rating.route.js";
import connectDB from "./config/db.js"



const app = express()
app.use(express.json())
connectDB();
app.use(test);
app.use(category);
app.use(user);
app.use(subcategory);
app.use(product);
app.use(reviewrating);

// app.use(router);
app.listen(3002,(request,response) =>{
    console.log("Yes your server connected with PORT:3002");
})