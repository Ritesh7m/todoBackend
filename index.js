const express = require('express');
const app= express();
const todoRoutes = require('./routes/todos');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1',todoRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

const dbConnect = require('./config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send('Hello World');
});
