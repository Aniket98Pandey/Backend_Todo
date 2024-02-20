const Todo = require("../Model/todo");

exports.getTodo = async(req, res)=>{
    try{
        // fetch all the item frpm the database
        const todos = await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire todo data fetched"

        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server Error"
        })
    }
}

exports.getTodoById = async(req, res) =>{
    try{
    //   extract toto items basis on id

    const id = req.param.id;
    const todo = await Todo.find({_id:id});
    //  data for fiven id is not found
    if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data Found"
        })
    }
    res.status(200).json({
        succes:true,
        data:todo,
        message:`Todo &{id data Successfully fetch`
    })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server Error"
        })
    }
}