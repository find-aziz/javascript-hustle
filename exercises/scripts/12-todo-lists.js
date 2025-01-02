let todoList = [];
renderHtml();
function renderHtml() {
  let todoListHTML = "";
  todoList.forEach(function(todoObject,index){
    const {name,dueDate}= todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
            <button class="delete btn" onclick="
                todoList.splice(${index},1);
                renderHtml();
            ">Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputNameElement = document.querySelector(".js-name-input");
  const name = inputNameElement.value;
  const inputDateElement = document.querySelector(".js-date-input");
  const dueDate = inputDateElement.value;
  const todoObject ={name,dueDate};
  todoList.push(todoObject);
  console.log(todoList);
  inputNameElement.value = "";
  inputDateElement.value = "";
  renderHtml();
}
