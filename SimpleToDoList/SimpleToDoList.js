window.onload = function() {
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', addTodo);

}

function addTodo() {
    const todo = document.getElementById('todo');

    if (!todo.value || todo.value === '') {
        return;
  }

    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.addEventListener('click', deleteTodo);
    button.innerText = todo.value;
    li.appendChild(button);
    list.appendChild(li);
    todo.value = "";
}

function deleteTodo(evt) {
    const button = evt.target;
    const li = button.parentElement;
    li.remove();
}