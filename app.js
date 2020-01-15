function createToDoListItem() {
  const input = document.querySelector("input[type=text]");
  const li = document.createElement("li")
  li.textContent = input.value
  const ul = document.querySelector("ul")
  ul.appendChild(li)
  alert(`Added Task: ${input.value}`);
  input.value = ""
}

const addButton = document.querySelector("button")
addButton.addEventListener('click', createToDoListItem)