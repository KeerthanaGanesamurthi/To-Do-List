const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      listItem.classList.toggle('completed');
    });
    const label = document.createElement('label');
    label.innerText = newTask;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(listItem);
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
