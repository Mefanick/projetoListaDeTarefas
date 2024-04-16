const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
];
let contador2 = 3;
function revomeTask(event) {
  console.log(event)
}
function indexOf(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i; 
    }
  }
  return -1; 
}
function addClickOnbutton() {
  const buttao = document.querySelectorAll('.task__button--remove-task');
  for (let i = 0; i < buttao.length; i++) {
    const removeList = document.querySelectorAll(".task__item")
    const ul = document.querySelector(".tasks__list")
    buttao[i].onclick = function (event) {
      let butaoClicado = event.target;
      let li = butaoClicado.parentNode;
      indexOf();
      li.remove();
    }
  }
}
addClickOnbutton();
function createTaskItem(title, type) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const taskTitle = title;

  ul.appendChild(li);
  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(button);

  p.innerText = taskTitle;
  li.classList.add("task__item");
  div.classList.add("task-info__container");
  button.classList.add("task__button--remove-task");
  if (type == 'Urgente') {
    const taskImportance = 'span-urgent';
    span.classList.add('task-type', taskImportance);
  } else if (type == 'Importante'){
    const taskImportance = 'span-important';
    span.classList.add('task-type', taskImportance);
  } else if(type == 'Normal'){
    const taskImportance = 'span-normal';
    span.classList.add('task-type', taskImportance);
  }
  addClickOnbutton();
}
let contador = tasks.length
function renderElements(tasks) {
  ul = document.querySelector("ul");
  createTaskItem(tasks[contador].title, tasks[contador].type)
  
}
const formSubmit = document.querySelector(".form__container")
formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectPriority = document.querySelector(".form__input--priority")
  const inputName = document.querySelector(".form__input--text");
  tasks.push({title: inputName.value, type: selectPriority.value});
  renderElements(tasks)
})
