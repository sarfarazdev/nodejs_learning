import express from "express";
import fs from "fs";

import test from "./routes/test.route.js";
import router from "./routes/user.route.js";
import connectDB from "./config/db.js"
const app = express()
app.use(express.json())
connectDB();
app.use(test);
app.use(router);

app.listen(3002,(request,response) =>{
    console.log("Yes your server connected with PORT:3002");
})