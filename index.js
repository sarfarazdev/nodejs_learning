import express from "express";
import fs from "fs";

import router from "./routes/test.route.js";

const app = express()
app.use(express.json())

app.use(router);

app.listen(3002,(request,response) =>{
    console.log("Yes your server connected with PORT:3002");
})