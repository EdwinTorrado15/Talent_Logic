const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}

/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo and edit  */
const todo_submit = document.getElementById("todo_submit");
const edit_todo_submit = document.getElementById("edit_todo_submit");

edit_todo_submit.addEventListener("click", saveTodoChanges);
todo_submit.addEventListener("click", createTodo);

function saveTodoChanges() {
  const name_val = document.getElementById("edit_todo_name_input").value;
  const desc_val = document.getElementById("edit_todo_description_input").value;
  const due_val = document.getElementById("edit_todo_due_date_input").value;

  const todo = document.querySelector(".todo.editing");
  todo.querySelector(".title").textContent = name_val;
  todo.querySelector(".description").textContent = desc_val;
  todo.querySelector(".due-date").textContent = due_val;

  document.getElementById("edit_todo_form").classList.remove("active");
  overlay.classList.remove("active");
  todo.classList.remove("editing");
}

function createTodo() {
  const todo_div = document.createElement("div");
  const name_val = document.getElementById("todo_name_input").value;
  const name_p = document.createElement("p");
  const name_txt = document.createTextNode(name_val);
  name_p.appendChild(name_txt);
  name_p.classList.add("title");

  const desc_val = document.getElementById("todo_description_input").value;
  const desc_p = document.createElement("p");
  const desc_txt = document.createTextNode(desc_val);
  desc_p.appendChild(desc_txt);
  desc_p.classList.add("description");

  const due_val = document.getElementById("todo_due_date_input").value;
  const due_p = document.createElement("p");
  const due_txt = document.createTextNode(due_val);
  due_p.appendChild(due_txt);
  due_p.classList.add("due-date");

  const edit_btn = document.createElement("button");
  const edit_txt = document.createTextNode("Editar");
  edit_btn.appendChild(edit_txt);
  edit_btn.classList.add("edit");

  todo_div.appendChild(name_p);
  todo_div.appendChild(desc_p);
  todo_div.appendChild(due_p);
  todo_div.appendChild(edit_btn);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  /* create span */
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);

  edit_btn.addEventListener("click", () => {
    const name = todo_div.querySelector(".title").textContent;
    const desc = todo_div.querySelector(".description").textContent;
    const due = todo_div.querySelector(".due-date").textContent;

    document.getElementById("edit_todo_name_input").value = name;
    document.getElementById("edit_todo_description_input").value = desc;
    document.getElementById("edit_todo_due_date_input").value = due;

    document.getElementById("edit_todo_form").classList.add("active");
    overlay.classList.add("active");

    // Agrega la clase "editing" al elemento Todo correspondiente
    todo_div.classList.add("editing");
  });

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_name_input").value = "";
  document.getElementById("todo_description_input").value = "";
  document.getElementById("todo_due_date_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
