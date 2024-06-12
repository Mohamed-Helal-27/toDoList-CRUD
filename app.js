const express = require("express");
const mongoose = require("mongoose");
const tasksRoute =require('./routes/taskRoutes')

const app = express();
const port = 3000;

//middleware
app.use(express.json());


//DB connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin')
const db = mongoose.connection;
db.on('error',()=>{
    console.log("connection Error!!!!!");
})
db.once('open',()=>{
    console.log("connetion db is succesful!!!!");
})

app.use(tasksRoute);
app.listen(port,()=>{
   console.log("server run in port 3000") ;
})