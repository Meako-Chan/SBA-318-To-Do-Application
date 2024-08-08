let dueDates = require('./dueDate');
let priorities = require('./priority');

let todos = [
    {id: 1, title: "SBA 318", description: 'Express App with REST Api', completed: false, dueDate: new Date('2024-7-30'), priority: "high"},
    {id: 2, title: "To-Do App", description: 'App to hold to-do lists', completed: false, dueDate: new Date('2024-7-14'), priority: "high"},
    {id: 3, title: "Read a Book", description: 'Spend idle time reading', completed: true, dueDate: new Date('2024-7-11'), priority: "low"},
]

function getTodos(){
    return todos;
}

function getTodoById(id){
    let todo = todos.find(todo => todo.id === id);
    return todo;
}

function addTodo(todo){
    todo.id = todos.length + 1;
    todo = dueDates.addDueDate(todo, todo.dueDate);
    todo = priorities.addPriority(todo, todo.priority);
    todos.push(todo);
    return todo;
}

function updateTodo(id, newTodo){
    let todo = todos.find(todo => todo.id === id);
    //Replace properties of object with newTodo
    Object.assign(todo, newTodo);
    return todo;
}

function deleteTodo(id){
    let index = todos.findIndex(todo => todo.id === id);
    if(index){
        todos.splice(index, 1);
        return todos;
    }
    return null;
}

module.exports = {
    getTodos, 
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
}