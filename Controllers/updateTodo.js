const Todo  = require("..Models/todo");

exports.updateTodo  =async (req, res) =>{
    try{
       const {id} = req.params;
       const {title, description} = req.body
       const Todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title, description,updatedAt:Date.now()}
       )
       res.status(200).json({
        sucess:true,
        data:response,
        massage:"updated SuccessFully "
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