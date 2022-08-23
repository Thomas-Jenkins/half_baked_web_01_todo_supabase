export function renderTodo(todo, handleComplete) {
    // create a div and a p tag
    const todoDiv = document.createElement('div');
    const todoP = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    todoDiv.classList.add(todo.complete ? 'complete' : 'incomplete');
    // add the 'todo' css class no matter what
    todoDiv.classList.add('todo');
    // put the todo's text into the p tag
    todoP.texContent = todo.todo;
    // append stuff
    todoDiv.append('todoP');
    // add event listener for click and call handleComplete function
    
    // return the div
    return todoDiv;
}
