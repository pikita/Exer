/* impostazione listener e caricamento pagina */

document.addEventListener("DOMContentLoaded", () => {
    const newTaskBtn = document.getElementById("new-task-btn");
    const clearBtn = document.getElementById("clear-btn");
    const input = document.getElementById("new-task");

    const todoList = new TODOList();

    newTaskBtn.addEventListener("click", () => {
        todoList.aggiungiTask(input.value);
    });
    clearBtn.addEventListener("click", () => {
        console.log("pulisci task");
    });
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            todoList.aggiungiTask(input.value);
            input.value = "";
        }
    });
});

class TODOList {
    constructor() {
        this.tasks = this.caricaTask();
        this.generaTask();
    }

    aggiungiTask(task) {
        this.tasks.push(task)
        const todo = document.getElementById("todo")
        const p = document.createElement("p")
        p.appendChild(document.createTextNode(task))
        todo.appendChild(p)
        p.addEventListener("click", (e) => {
            this.concludiTask(task)
            e.target.remove()
        })
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    concludiTask(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log(this.tasks);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    caricaTask() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
        return tasks;
    }

    generaTask() {
        this.tasks.forEach((task) => {
          const todo = document.getElementById("todo");
          const p = document.createElement("p");
          p.appendChild(document.createTextNode(task));
          todo.appendChild(p);
          p.addEventListener("click", (e) => {
            this.concludiTask(task);
            e.target.remove();
          });
        });
      }
}