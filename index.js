import express from "express";
import fs from "fs";
import path from "path";

import test from "./routes/test.route.js";
import {user} from "./routes/user.route.js";
import {category} from "./routes/category.route.js";
import {subcategory} from "./routes/sub.category.route.js";
import connectDB from "./config/db.js"

import multer from "multer";


const app = express()
app.use(express.json())
connectDB();
app.use(test);
app.use(category);
app.use(user);
app.use(subcategory);
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
         cb(null, 
            file.fieldname + '_' + Date.now()  + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 
export const router = express.Router();

router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})
app.use(router);
app.listen(3002,(request,response) =>{
    console.log("Yes your server connected with PORT:3002");
})