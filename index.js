import express from "express";
import fs from "fs";
const app = express()
app.use(express.json())
//req.body = jo data body m pass kiya hai usko nikalne ke liye
//req.params = jo data paramter m pass kiya hai usko nikalne ke liye
//req.query = jo data query(url ke string jo ki define) m pass kiya hai usko nikalne ke liye
export const authentication = function(req,res,next) {
    if(req.headers.authorization){
        console.log("User token is set");
        next();
    }else{
        console.log("User token is not set");
        res.end("Your token is not valid.")
    }
}
app.use(authentication)

app.post("/createfile/:id/:name",(req,res) => {

    var data = [];
    console.log("array ben reha h ya nahi----",data);
    data.push(req.body)
    console.log("New data means req.body data ke ander push ho rehi h ya nahi---",data);
    var ConvToString = JSON.stringify(data);
    console.log("String m convert kerte time---",ConvToString);

    fs.writeFile('user.json', ConvToString, function (err) {
        if (err){ 
            throw err;
        }else{
            res.send("File created succesfully");
        }
        console.log('Saved!');
      });
})
app.put("/updatefile",(req,res) =>{
    fs.readFile("user.json",function(erorr,data) {
        
        if(erorr){
            throw erorr
        }else{
            var newData = req.body;
            var oldData = JSON.parse(data);
            oldData.push(newData)
            var convertToString = JSON.stringify(oldData)
            fs.writeFile("user.json",convertToString,function(erorr) {
                if(!erorr){
                    res.send("data updated successfully.");
                }else{
                    throw erorr
                }
            })
        }
    })
})

app.post("/append",(req,res) =>{
    fs.appendFile("cotent.txt","Hello World!",(er) =>{
        console.log("What is issue with ER varible---",er);
        if(er == null){
            res.send("Data appended.");
        }else{
            throw er;
        }
    })
})
app.listen(3002,(request,response) =>{
    console.log("Yes your server connected with PORT:3002");
})