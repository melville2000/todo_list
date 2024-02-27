const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click",addTodo)

todoList.addEventListener("click",delCheck)

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const checkmark =document.createElement('button')
    checkmark.innerHTML='<i class=" fas fa-check"></i>'
    checkmark.classList.add('checkmark')
    todoDiv.appendChild(checkmark)


    const trashed =document.createElement('button')
    trashed.innerHTML='<i class=" fas fa-trash"></i>'
    todoDiv.appendChild(trashed)
    trashed.classList.add('trashed')
    todoList.appendChild(todoDiv);

    todoInput.value=""

}

function delCheck(e){
    let item = e.target;
    // console.log(item)
    if(item.classList[0]==="trashed"){
        item.parentElement.classList.add("deleted")
        item.parentElement.addEventListener("transitionend",()=>{
            item.parentElement.remove()
        })
    }
    if(item.classList[0]==="checkmark"){
        item.parentElement.classList.toggle("done")
    }
}
