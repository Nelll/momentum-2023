const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoListColumn = document.querySelector(".todo-list__column");
const toDoBtn = document.querySelector(".todo-list__button");
const toDoColumn = document.querySelector(".todo-column");
const loginFormTodo = document.querySelector("#Login-form");

const HIDDEN_CLASSNAME_TODO = "hidden";
const USERNAME_KEY_TODO = "username";

const TODOS_KEY = "todos";
const title = document.querySelector(".todo-title");
let toDos = [];

function paintTitle() {
    if(toDos.length === 0) {
        toDoListColumn.classList.add(HIDDEN_CLASSNAME_TODO);
    }else {
        toDoListColumn.classList.remove(HIDDEN_CLASSNAME_TODO);
    }
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    paintTitle()
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = `• ${newTodo.text}`;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

paintTitle()

function handleToDoList() {
    const toDoListClass = toDoListColumn.classList;
    if(toDoListClass.contains(HIDDEN_CLASSNAME_TODO)) {
        toDoListClass.remove(HIDDEN_CLASSNAME_TODO);
    } else{
        toDoListClass.add(HIDDEN_CLASSNAME_TODO);
    }
}

toDoBtn.addEventListener("click", handleToDoList);


function onToDoSubmit(event) {
    toDoColumn.classList.remove(HIDDEN_CLASSNAME_TODO);
}

const savedUsernameToDo = localStorage.getItem(USERNAME_KEY_TODO);

if(savedUsernameToDo === null){
    toDoColumn.classList.add(HIDDEN_CLASSNAME_TODO);
    loginFormTodo.addEventListener("submit", onToDoSubmit);
}else {
toDoColumn.classList.remove(HIDDEN_CLASSNAME_TODO);
}