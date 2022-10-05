import jwt from "jsonwebtoken";
import fs from "fs";
import bcrypt from "bcrypt";
import User from "../models/user.model.js"
export const signup = async(req,res) =>{
   try{
      const IsEmailExist = await User.findOne({email:req.body.email})
      if(IsEmailExist){
         res.end("Email already exist.");
      }else{
            const user = await User.create(req.body);
            res.send(user);
      }
      
   }
   catch (err){
      res.send(err)
   }

   
   // let bodyData = req.body
   // bodyData.token = jwt.sign({time:Date(),userId:11},"we-are-genrating-token")
   // bodyData.password = await bcrypt.hash(bodyData.password, 10);
   // let convertedToString = JSON.stringify(bodyData)
   // fs.writeFile("user.json",convertedToString,(err) =>{
   //    if(err){
   //       res.end("Something wrong with request.")
   //    }
   //    res.end("Your Data successfully inserted.")
   // })
}

export const login = (req,res) =>{
   fs.readFile("user.json",async(err,data) =>{
      var dbData = JSON.parse(data);
      var reqData = req.body;
      if(reqData.email == dbData.email){
         var isValid = await bcrypt.compare(reqData.password,dbData.password)  
         if(isValid){
            dbData.token = jwt.sign({time:Date(),userId:11},"we-are-genrating-token")
            res.send({
               stauts:true,
               msg:"Login Successfully.",
               data:dbData
            })
         }else{
            res.send({
               status:false,
               msg:"Invalid password given.",
               data:{}
            })
         }
      }else{
         res.send({
            status:false,
            msg:"Email does not exist.",
            data:{email:reqData.email}
         });
      }
      res.send([reqData.email,dbData.email])
   })
}


