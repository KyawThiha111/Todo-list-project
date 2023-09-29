const addBtn = document.querySelector(".addBtn");
const todoInput = document.querySelector(".inputTodo");
const todo_container = document.querySelector(".todo-container");
function todolistControl(){
  if(todoInput.value===""){
    alert("Put a task on your to-do list.")
  }else{
    let div = document.createElement("div");
    let listItem = document.createElement("li");
    listItem.textContent = todoInput.value;
    listItem.classList.add("list-item");
    let checked = document.createElement("button");
    checked.innerHTML = `<i class="bi bi-check2"></i>`;
    checked.classList.add("checked");
    let deleted = document.createElement("button");
    deleted.classList.add("deleted")
    deleted.innerHTML = `<i class="bi bi-trash"></i>`;
    div.appendChild(listItem);
    div.appendChild(checked);
    div.appendChild(deleted);
    todo_container.appendChild(div)

    todoInput.value = " ";

    checked.addEventListener("click",(e)=>{
        listItem.style.textDecoration = "line-through";
      })
    
  deleted.addEventListener("click",(e)=>{
    e.target.parentElement.parentElement.remove()
  })
  }
}

addBtn.addEventListener("click",todolistControl);