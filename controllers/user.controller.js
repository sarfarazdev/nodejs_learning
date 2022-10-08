import jwt from "jsonwebtoken";
import fs from "fs";
import bcrypt from "bcrypt";
import User from "../models/user.model.js"
export const signup = async(req,res) =>{
  
   try{
      const IsEmailExist = await User.findOne({email:req.body.email})
      const IsMobileExist = await User.findOne({mobile:req.body.mobile})
      if(IsEmailExist){
         res.send({
            status:false,
            msg:"Email already exist.",
            data:{}
         });
         return;
      }else if(IsMobileExist){
         res.send({
            status:false,
            msg:"Mobile already exist.",
            data:{}
         });
         return;
      }
      else{
            const passwordHash = await bcrypt.hash(req.body.password,10)
            req.body.password = passwordHash
            var user = await User.create(req.body);
            if(user){
            user.token = await jwt.sign({time:Date(),userId:user._id},"coaching")
            res.send({
               status:true,
               msg:"Signup Successfully.",
               data:user
            });
            }
            // user.token = token
            
      }
   }
   catch (err){
      res.status(500).send({
         status:false,
         msg:"Something wrong with request.",
         data:err
      })
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

export const login = async(req,res) =>{
   var getUserData = await User.findOne({email:req.body.email});
   res.send(getUserData)
   if(getUserData){
      let checkPass = await bcrypt.compare(req.body.password,getUserData.password)
      if(checkPass){
         getUserData.token = await jwt.sign({time:Date(),userId:getUserData._id},"coaching")
         res.send({
            status:true,
            msg:"Login Succesfully",
            data:getUserData
         })
      }else{
         res.send({
            status:false,
            msg:"Invalid Password given.",
            data:{}
         })
      }
   }else{
      res.send({
         status:false,
         msg:"Email not found",
         data:{}
      })
   }





















   // fs.readFile("user.json",async(err,data) =>{
   //    var dbData = JSON.parse(data);
   //    var reqData = req.body;
   //    if(reqData.email == dbData.email){
   //       var isValid = await bcrypt.compare(reqData.password,dbData.password)  
   //       if(isValid){
   //          dbData.token = jwt.sign({time:Date(),userId:11},"we-are-genrating-token")
   //          res.send({
   //             stauts:true,
   //             msg:"Login Successfully.",
   //             data:dbData
   //          })
   //       }else{
   //          res.send({
   //             status:false,
   //             msg:"Invalid password given.",
   //             data:{}
   //          })
   //       }
   //    }else{
   //       res.send({
   //          status:false,
   //          msg:"Email does not exist.",
   //          data:{email:reqData.email}
   //       });
   //    }
   //    res.send([reqData.email,dbData.email])
   // })
}


