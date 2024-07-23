var express = require('express');
var router = express.Router();
var todos = require('../data/todos');

/* GET all todos */
router.get('/', function(req, res) {
  res.json(todos.getTodos());
});

/* GET todo by id */
router.get('/:id', function(req, res) {
  const todo = todos.getTodoById(parseInt(req.params.id));
  if(!todo){
    res.status(404).send('No todo found at id');
  }
  res.json(todo);
});

/* POST todo by id */
router.post('/', function(req, res) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };
  const newTodo = todos.addTodo(todo);
  res.status(201);
  res.json(newTodo);

});

/* PUT update todo by id */
router.put('/:id', function(req, res) {
  let id = parseInt(req.params.id);
  const updatedTodo = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  }
  let todo = todos.updateTodo(id, updatedTodo);
  if(!todo){
    return res.status(404).send('No todo found');
  }
  res.json(todo);
});

/* DELETE todo by id */
router.delete('/:id', function(req, res){
  let id = parseInt(req.params.id);
  const todo = todos.deleteTodo(id);
  if(!todo){
    return res.status(404).send('No todo found');
  }
  res.json(todo);
})
module.exports = router;
