const Todo = require("../Models/todo");

exports.createTodo = async(req,res)=>{
    try{
    //    extract title and discription from request ki body

    const {title, description} = req.body;

    // create New Todo Object and Insert in Db
    const response = await Todo.create({title, description});
    // send a json response with a success flag
    res.status(200).json({
        sucess:true,
        data:response,
        massage:"Entry Created SuccessFully "
    });
    }

    catch(error){
    console.error(error);
    console.log(error);
    res.status(500)
    .json({
        sucess:false,
        data:"Internal server Error",
        massage: error.massage
      })
    }
    
}

