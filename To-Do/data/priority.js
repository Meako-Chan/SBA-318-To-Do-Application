//Used to add and change priorities to todos

function addPriority(todo, priority){
    todo.priority = priority;
    return todo;
}

function changePriority(todo, priority){
    todo.priority = priority;
    return todo;
}

module.exports = {
    addPriority,
    changePriority
}