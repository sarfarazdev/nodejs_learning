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
import { config } from 'dotenv';
import { createServer } from "http";
import { Server } from "socket.io";


config();
const app = express()
app.use(express.json())
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/home/:room/:user', function(req, res) {
  res.render('pages/index',{"room" :req.params.room,"user" :req.params.user});
});
// const httpServer = createServer();
// const socket = new Server(httpServer, {
// 	cors: {
// 		origins: ['http://dev.adaiya.in','http://localhost:4200','http://localhost:9002'],
// 		'transports': ['websocket', 'pollings']
// 	  },
// });
//  var users = {};
// socket.on('connection', (socket) => {
//     console.log("Connected...");
// 	socket.on('judna', (data) => {
// 		console.log("Connected Join----",data);
// 	  socket.join(data.room);
// 	  users[socket.id] = data.user;
// 	  var  JoinRes = {
// 		message: data.user+' has joined '+data.room+" room",
// 		users:users,
// 	};
// 	  socket.broadcast.to(data.room).emit('ha_jud_gya_hai', JoinRes);
// 	});
// });
// connectDB();
// app.use(test);
// app.use(category);
// app.use(user);
// app.use(subcategory);
// app.use(product);
// app.use(reviewrating);

// app.use(router);
app.listen(process.env.PORT || 3001,(request,response) =>{
    console.log("Yes your server connected with PORT:3002");
})