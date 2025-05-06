function addTask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText == ""){
        alert("Digite uma tarefa!");
        return;
    }

    const list = document.getElementById("todoList");
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span> 
    <button class="complete-btn" onclick="completeTask(this)">Concluir</button>
    <button class="delete-btn" onclick="deleteTask(this)">Excluir</button>
    </span>
    `;
     list.appendChild(li);
     input.value='';
}  

function deleteTask(button){
    const li = button.parentElement.parentElement;
    li.remove();
}

function completeTask(button) {
    const li = button.closest("li");
    const taskText = li.querySelector(".task-text");

    const isCompleted = taskText.classList.toggle("completed");

    if (isCompleted) {
        button.classList.add("completed-btn");
        button.textContent = "Concluído";
    } else {
        button.classList.remove("completed-btn");
        button.textContent = "Concluir";
    }
}

