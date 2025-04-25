let todoList = [];
renderHtml();
function renderHtml() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-input1");
  todoList.push(inputElement.value);
  console.log(todoList);
  inputElement.value = "";
  renderHtml();
}
