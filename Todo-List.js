const input = document.querySelector('.input-box');
const button = document.querySelector('.add-button');
const todolist = document.querySelector('.todo-list');
button.addEventListener('click', addtodo);
todolist.addEventListener('click', handleTodoClick);

function addtodo(event) {
    event.preventDefault(); // Prevents the default action of the event (e.g., form submission)
    
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-container");
    
    const todoitem = document.createElement("li");
    todoitem.classList.add("todo-item");
    todoitem.innerText = input.value;
    tododiv.appendChild(todoitem);

    const deletebutton = document.createElement("button");
    deletebutton.classList.add("deletebutton");
    deletebutton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Renders the trash icon and creates a button
    tododiv.appendChild(deletebutton);

    const completebutton = document.createElement('button');
    completebutton.classList.add("completebutton");
    completebutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    tododiv.appendChild(completebutton);

    todolist.appendChild(tododiv); // Add the todo item to the list
    input.value = ""; // Clear the input box
}

function handleTodoClick(event) {
    const item = event.target;
    
    if (item.classList[0] === "deletebutton") {
        const delitem = item.parentElement;
        delitem.remove(); // Remove the todo item
    }

    if (item.classList[0] === "completebutton") {
        const completeitem = item.parentElement;
        completeitem.classList.toggle("completed"); // Toggle the completed class
    }
}