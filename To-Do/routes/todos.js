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
router.post('/:id', function(req, res) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };
  const newTodo = todos.addTodo(todo);
  res.status(201);
  res.json(newTodo);

});
module.exports = router;
