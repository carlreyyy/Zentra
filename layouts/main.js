document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todoInput");
    const addButton = document.getElementById("plusIcon");
    const todoList = document.getElementById("todoList");

    const statusLayout = {
        todo: {
            background: "#2795b4",
            icon: '<img src="./assets/icons/todo.png" alt="todo">'
        },
        ongoing: {
            background: "#9f9f9d",
            icon: '<img src="./assets/icons/ongoing.png" alt="ongoing">'
        },
        done: {
            background: "#af4141",
            icon: '<img src="./assets/icons/done.png" alt="done">'
        }
    };

    function createTask(taskText, status = "todo") {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.style.background = statusLayout[status].background;

    li.innerHTML = `
        <div class="task-content">
            <span class="status-icon">${statusLayout[status].icon}</span>
            <span class="task-text">${taskText}</span>
        </div>

         <div class="task-actions">
            <img src="./assets/icons/gear.png" alt="settings" class="settings-icon">
            <img src="./assets/icons/trash.png" alt="delete task" class="delete">
        </div>

        <div class ="status-menu hidden">
            <button data-status="todo" class="statusSetting">${statusLayout["todo"].icon} To Do</button>
            <button data-status="ongoing" class="statusSetting">${statusLayout["ongoing"].icon} Ongoing</button>
            <button data-status="done" class="statusSetting">${statusLayout["done"].icon} Done</button>
        </div>
    `;

    todoList.appendChild(li);
    }


    todoList.addEventListener("click", (e) => {
        const li = e.target.closest("li");

        if (e.target.classList.contains("settings-icon")){
            const menu = li.querySelector(".status-menu");
            menu.classList.toggle("hidden");
        }

        if(e.target.classList.contains("delete")){
            if(confirm("Are you sure you want to delete this task?")){
                li.remove();
            }
        }
        
        const button = e.target.closest(".status-menu button");
        if(button){
            const newStatus = button.dataset.status;
            li.style.background = statusLayout[newStatus].background;
            li.querySelector(".status-icon").innerHTML = statusLayout[newStatus].icon;
            li.querySelector(".status-menu").classList.add("hidden");
        }

    });

    addButton.addEventListener("click", () => { 
        const task = input.value.trim();
        if (task !== "") {
            createTask(task);
            input.value = "";
        } else {
            alert("Please enter some task");
        }
    })

    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            const task = input.value.trim();

            if(task !== ""){
                createTask(task);
                input.value = "";
            } else {
                alert("Please enter some task");
            }
        }
    })

    
});
