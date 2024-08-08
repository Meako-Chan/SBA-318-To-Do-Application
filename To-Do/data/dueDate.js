function addDueDate(todo, dueDate){
    todo.dueDate = new Date(dueDate);
    return todo;
  };
  
 function changeDueDate(todo, dueDate){
    todo.dueDate = new Date(dueDate);
    return todo;
  };
  
  module.exports = {
    addDueDate,
    changeDueDate
  };