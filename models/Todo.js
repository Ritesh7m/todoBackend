const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxLength:200,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },  

});

module.exports=mongoose.model('Todo',todoSchema); 