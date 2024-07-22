let todos = [
    {id: 1, title: "SBA 318", description: 'Express App with REST Api', completed: false},
    {id: 2, title: "To-Do App", description: 'App to hold to-do lists', completed: false},
    {id: 3, title: "Read a Book", description: 'Spend idle time reading', completed: true},
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
    todos.splice(index, 1);
    return todos;

}

module.exports = {
    getTodos, 
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
}