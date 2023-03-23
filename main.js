let arr = [];
const btn = document.getElementById("add");
const erase = document.getElementById("delete");
const task = document.getElementById("task");


btn.addEventListener("click", add);

function add(x) {
const ul = document.createElement("ul");
const body = document.querySelector("body");
body.appendChild(ul);
  arr.push(task.value);
  localStorage.setItem("key", JSON.stringify(arr));
  const h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode(task.value));
  ul.appendChild(h3);
  h3.innerHTML = task.value;
  task.value = "";
  x.preventDefault();
}
erase.addEventListener("click", eras);
function eras(x) {
    x.preventDefault();
    const ul = document.getElementsByTagName("ul");
    ul[0].remove();
}
