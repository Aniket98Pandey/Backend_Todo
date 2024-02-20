const express = require('express');

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

// we need midleware to parse json request body

app.use(express.json());


const todoRoutes  = require("./Routes/Todo");
 app.use("/api/v1", todoRoutes);

 app.listen(PORT, ()=>{
    console.log(`Server is starting at the ${PORT}`);
 })


//  coonect to db coonet

const dbConnect  = require("./Config/Database");
dbConnect();

app.get("/",(req, res)=>{
    res.send("<h1>This is Home Page</h1>")
})