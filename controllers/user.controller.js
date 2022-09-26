import jwt from "jsonwebtoken";
import fs from "fs";
import bcrypt from "bcrypt";
export const signup = async(req,res) =>{
   const salt = await bcrypt.genSalt(10);
   const token = jwt.sign( {time: Date(),userId:1}, "coaching-testing");
   const verify =jwt.verify(token,"coaching-testing")
   var data = [];
   var newUser = req.body;
   newUser.token = token;
   console.log("Old password----","12345");
   const validPassword = await bcrypt.compare("1234", "$2b$10$fHMWdqdPxx66QBg7k/kMzulDsV.gGBcvQl4Op/7925a4TOnQPzIj2");
	if(validPassword){
      res.send("Your passowrd is correct.");
   }else{
      res.send("Your passowrd is incorrect.");
   }
   newUser.password = await bcrypt.hash("12345", salt);

   console.log("New password----",newUser.password);
   console.log("New password----",validPassword);
   res.send(newUser);
   data.push(newUser);
   var convertedToString = JSON.stringify(data)
   fs.writeFile("user.json",convertedToString,(err) => {

   })
   
   res.send({
      token:token,
      verified_string:verify
   });
}
