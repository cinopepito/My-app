//line of code to add item to the todo list
function addItem() {
  let newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("box").value;
  document.getElementById("list").appendChild(newItem);
  newItem.onclick = removeItem;
  savedList();
}
//line ofcode to reme item of the list when we click on the item we've added
function removeItem() {
  document.getElementById("list").removeChild(this);
  savedList();
}
//line of code to save element we add to the localstorage
function savedList() {
  localStorage.storedList = document.getElementById("list").innerHTML;
}

//line of code to load element we save in the localstorage space

function loadList() {
  document.getElementById("list").innerHTML = localStorage.storedList;
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem;
  }
}
//condition to check if the list exist before loading
if (localStorage.storedList) {
  loadList();
}
