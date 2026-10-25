const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const doneList = JSON.parse(localStorage.getItem('doneList')) || [];
let doneCount = JSON.parse(localStorage.getItem('doneCount')) || 0;

renderTodoList();
renderDoneList();

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
  localStorage.setItem('doneList', JSON.stringify(doneList));
  localStorage.setItem('doneCount', JSON.stringify(doneCount));
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="markDone(${i});" class="done-todo-button">Erledigt</button>
      <button onclick="deleteTodo(${i});" class="delete-todo-button">Löschen</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function renderDoneList() {
  let doneListHTML = '';

  for (let i = 0; i < doneList.length; i++) {
    const { name, dueDate } = doneList[i];
    const html = `
      <div class="done-name">${name}</div>
      <div>${dueDate}</div>
      <button onclick="deleteDone(${i});" class="delete-todo-button">Löschen</button>
    `;
    doneListHTML += html;
  }

  document.querySelector('.js-done-list').innerHTML = doneListHTML;
  document.querySelector('.js-done-score').innerHTML = `Insgesamt erledigt: ${doneCount}`;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name === '') {
    return;
  }

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  saveToStorage();
  renderTodoList();
}

function markDone(index) {
  const todo = todoList[index];
  todoList.splice(index, 1);
  doneList.push(todo);
  doneCount += 1;

  saveToStorage();
  renderTodoList();
  renderDoneList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveToStorage();
  renderTodoList();
}

function deleteDone(index) {
  doneList.splice(index, 1);
  saveToStorage();
  renderDoneList();
}
