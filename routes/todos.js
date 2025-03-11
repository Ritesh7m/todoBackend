const express = require('express');
const router = express.Router();

// import  controllers
const {createTodo} = require('../controllers/CreateTodo');
const {getTodo,getTodoById} =require('../controllers/getTodo');
const {updateTodo} =require('../controllers/updateTodo');
const {deleteTodo} =require('../controllers/DeleteTodo');

// define api routes
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

// export the routes
module.exports = router;