export function renderTodo(todo, literallyAnyFunction) {
    // create a div and a p tag
    const todoDiv = document.createElement('div');
    const todoP = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    todo.complete ? todoDiv.classList.add('complete') : todoDiv.classList.add('incomplete');
    // add the 'todo' css class no matter what
    todoDiv.classList.add('todo');
    // put the todo's text into the p tag
    todoP.texContent = todo.todo;
    // append stuff
    todoDiv.append('todoP');
    // add event listener for click and call handleComplete function
    todoDiv.addEventListener('click', async () => {
        await literallyAnyFunction(todo);
        
    });
    // return the div
    return todoDiv;
}
