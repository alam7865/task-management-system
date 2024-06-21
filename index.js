let arr = [
  {
    id: 1,
    title: "task 1",
    description: "Task for description 1",
    status: "pending",
    date: "2024-06-22",
  },

  {
    id: 2,
    title: "task 2",
    description: "Task for description 2",
    status: "completed",
    date: "2024-06-22",
  },

  {
    id: 3,
    title: "task 3",
    description: "Task for description 3",
    status: "rejected",
    date: "2024-06-22",
  },

  {
    id: 4,
    title: "task 4",
    description: "Task for description 4",
    status: "upcoming",
    date: "2024-06-22",
  },

  {
    id: 5,
    title: "task 5",
    description: "Task for description 5",
    status: "completed",
    date: "2024-06-22",
  },

  {
    id: 6,
    title: "task 6",
    description: "Task for description 6",
    status: "upcoming",
    date: "2024-06-22",
  },

  {
    id: 7,
    title: "task 7",
    description: "Task for description 7",
    status: "completed",
    date: "2024-06-22",
  },

  {
    id: 8,
    title: "task 8",
    description: "Task for description 8",
    status: "completed",
    date: "2024-06-22",
  },

  {
    id: 9,
    title: "task 9",
    description: "Task for description 9",
    status: "pending",
    date: "2024-06-22",
  },

  {
    id: 10,
    title: "task 10",
    description: "Task for description 10",
    status: "rejected",
    date: "2024-06-22",
  },
];

// HTMLTemplate
function HTMLTemplate(el) {
  return `<div class="box ${el.status}">
  <div class="header">
  <p>${el.status}</p>
  <p >${el.date}</p>
  </div>

  <div name="edit1" class="subheader">
  <h3 class="">${el.title}</h3>
  <h4>${el.description}</h4>
  </div>

  <div class="button">
  <button id=${el.id} class="edit btn">Edit</button>
  <button id=${el.id} class="delete_btn btn">Delete</button>

  <select class="btn select_option" name="status"  id=${el.id}>
    <option ${
      el.status === "completed" ? "selected" : ""
    } value="completed">completed</option>
    <option ${
      el.status === "rejected" ? "selected" : ""
    } value="rejected">rejected</option>
    <option ${
      el.status === "pending" ? "selected" : ""
    } value="pending">pending</option>
    <option ${
      el.status === "upcoming" ? "selected" : ""
    }   value="upcoming">upcoming</option>
  </select>
  </div>
  </div>`;
}

let content_container = document.getElementById("content_container");
let addTask = document.getElementById("addTask");
let search = document.getElementById("search");
let nav_bar = document.querySelector(".nav_container");
let contentBar = document.getElementById("content_container");
let modalBox = document.querySelector(".module_wraper");
let moduleContainer = document.getElementById("module_container");
let btnClose = document.querySelector(".closeBtn1");
let add_item_main = document.getElementById("add_item_main");

////////////////////////////////////////////////
// for add task
let input = document.getElementById("input");
let description = document.getElementById("description");
let date_time = document.getElementById("date_time");
let add_item_btn = document.querySelector(".add_item_btn");

//////////////////////////////////////////////////// for edit task ///////////////
let content_container_edit = document.getElementById("content_container_edit");
let modalBox_edit = document.querySelector(".module_wraper_edit");
let module_container_edit = document.getElementById("module_container_edit");
let btnClose_edit = document.querySelector(".closeBtn1_edit");
let input_edit = document.getElementById("input_edit");
let description_edit = document.getElementById("description_edit");
let date_time_edit = document.getElementById("date_time_edit");
let status_edit = document.getElementById("status_edit");
let id_edit = document.getElementById("id_edit");
let add_item_btn_edit = document.querySelector(".add_item_btn_edit");
//create table
function showData(arr) {
  let template = "";
  arr.forEach((el) => {
    template += HTMLTemplate(el);
  });
  // console.log(template);

  content_container.innerHTML = template;
}

// console.log(edit1);
showData(arr);

let box = document.querySelector(".box");
// let edit1 = document.getElementsByClassName("edit"); ///////////////////////////////////////////////
// edit1.addEventListener("click", function (e) {
//   console.log(e);
// });
// data.filter(value => filterKeys.some(key => (value[key] + "").toLowerCase().includes(event.target.value)))

search.addEventListener("keyup", serachTask);

function serachTask() {
  const searchValue = search?.value;
  let output = arr.filter((el) => {
    return el.title.includes(searchValue);
  });

  showData(output);
}

// delete task

content_container.addEventListener("click", function (e) {
  // let part = e;
  // console.log(e.target.value);
  // console.log({ op: e.target.name });
  const isStatus = e.target.name;

  const id = e.target.id;
  const text = e.target.innerText;
  // console.log({ text });
  // console.log({ id, text });
  if (text === "Delete") {
    let output = arr.filter((elem) => elem.id !== Number(id));
    showData(output);
    arr = output;
  }

  if (isStatus === "status") {
    const selected = e.target.value;
    // console.log({ id, selected });
    // if (selected === el.status) return;
    if (id) {
      const selectedElem = arr.find((el) => el.id === Number(id));
      // console.log({ selectedElem, selected });
      // if (selected === "rejected") {
      //   box.classList.add("red");
      //   console.log(box);
      // }
      if (selectedElem?.status === selected) {
        return;
      }
    }
    let output = arr.map((el) => {
      if (el.id === Number(id)) {
        return { ...el, status: selected };
      }
      return el;
    });
    arr = output;
    showData(arr);
  }

  // edit
  if (text === "Edit") {
    const selectedElem = arr?.find((elem) => elem.id === Number(id));
    // {
    // console.log(selectedElem);
    // }
    // console.log({ text, id, selectedElem });/

    // show edit pop up
    openModel();
    modalBox_edit.classList.add("edit_show_Modal");
    let date = selectedElem.date;
    let description = selectedElem.description;
    let title = selectedElem.title;

    date_time_edit.value = date;
    description_edit.value = description;
    input_edit.value = title;

    let editTemp = {
      ...selectedElem,
      title: input_edit.value,
      description: description_edit.value,
      date: date_time_edit.value,
    };
    add_item_btn_edit.setAttribute("id", selectedElem?.id);
    console.log(editTemp);
  }
});

add_item_btn_edit.addEventListener("click", function () {
  let date = date_time_edit.value;
  let description = description_edit.value;
  let title = input_edit.value;
  let id = add_item_btn_edit?.id;
  console.log({ date, description, title, id: add_item_btn_edit?.id });
  let res = arr.map((elem) => {
    if (elem?.id === Number(id)) {
      return { ...elem, date, description, title };
    }
    return elem;
  });
  arr = res;
  showData(res);
  modalBox_edit.classList.remove("edit_show_Modal");
  closeModel();
});

add_item_btn.addEventListener("click", function (e) {
  let title = input.value;
  let description1 = description.value;
  let date = date_time.value;
  let newTask = {
    id: new Date().getTime(),
    title: title,
    description: description1,
    status: "upcoming",
    date: date,
  };
  let res = [...arr, newTask];
  arr = res;
  showData(arr);
  // console.log(arr);
  closeModalWrapper();
  title = input.value = "";
  description1 = description.value = "";
  date = date_time.value = "";
});

/////////////////////////////////////////////////////////////////////////

// edit click to close

btnClose_edit.addEventListener("click", function () {
  modalBox_edit.classList.remove("edit_show_Modal");
  closeModel();
});

btnClose_edit.addEventListener("click", function () {
  closeModel();
});
// edit

function closeModel() {
  nav_bar.classList.remove("active_opacity");
  contentBar.classList.remove("active_opacity");
}

function openModel() {
  nav_bar.classList.add("active_opacity");
  contentBar.classList.add("active_opacity");
}

function showModalWrapper() {
  modalBox.classList.add("show");
  openModel();
}

function closeModalWrapper() {
  modalBox.classList.remove("show");
  closeModel();
}

function AddListItem() {
  showModalWrapper();
}

add_item_main.addEventListener("click", AddListItem);

btnClose.addEventListener("click", closeModalWrapper);
