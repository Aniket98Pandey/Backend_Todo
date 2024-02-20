const Todo  = require("..Models/todo");
const { param } = require("../Routes/Todo");

exports.deleteTodo = async(req,res)=>{
    try{
         const {id} =req.params
         await Todo.findByIdAnddelete(id);


         res.status(200).json({
            sucess:true,
            data:response,
            massage:"Delete SuccessFully "
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