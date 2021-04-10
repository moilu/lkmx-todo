

export const addTodo = (todo) => {
    
    const todosUl = document.getElementById('todos');
    const todoEl  = document.createElement('li');

    todoEl.innerText = todo;

    todoEl.addEventListener('click', () => {
        todoEl.classList.add('completed');
    });

    todoEl.addEventListener('dblclick', () => {
        todoEl.remove();
    });

    todosUl.appendChild(todoEl);
}