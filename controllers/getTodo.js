const Todo =require("../models/Todo");

exports.getTodo =async(req,res) =>{
    try{
          const todos= await Todo.find({});

          res.status(200).json({
            success:true,
            data:todos,
            message:"all todos are fetched"
          });
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"kuch nahi mila server error"
        })

    }
}

exports.getTodoById =async(req,res)=>{
    try{

        const  id=req.params.id;
        const todo = await Todo.findById({_id:id})

        if(!todo){
            return res.status(400).json({
                success:false,
                message:"no data is found with the given id"
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} data found`,
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"kuch nahi mila server error"
        })

    }
}