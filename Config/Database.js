const mongoose = require("mongoose");
require("dotenv").config(); 
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    .than(()=>{
        console.log("DB ka Connection Stablished Ho Gya");
    })
    .catch((error)=>{
        console.log("Issue In DB Connection");
        console.error(error.massage);
        process.exit(1);
    })
    
}

module.exports = dbConnect;
