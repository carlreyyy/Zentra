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
            <img src="./assets/icons/gear.png" alt="settings" class="settings-icon"">
        `;

        todoList.appendChild(li);
    }

    function editTask(status) {

    }


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
