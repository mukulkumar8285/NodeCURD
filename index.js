const express = require("express");
const JobRouter = require("./routers/job");

const mongoose = require("mongoose");


const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jobapp")
.then(()=> console.log("Connection with Database established successfuly"))
.catch((err)=> console.log("Error Connecting With Database" , err));


app.use(JobRouter);

app.listen(8080 , ()=>{
    console.log("Server is running on port 8080");
})

