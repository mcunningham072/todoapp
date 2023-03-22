function addTask() {
  // Get the value of the input field
  var input = document.getElementById("input-task");
  var task = input.value;
  
  // Clear the input field
  input.value = "";
  
  // Create a new list item with the task as text
  var listItem = document.createElement("li");
  var taskText = document.createTextNode(task);
  listItem.appendChild(taskText);
  
  // Add a "delete" button to the list item
  var deleteButton = document.createElement("button");
  var deleteText = document.createTextNode("X");
  deleteButton.appendChild(deleteText);
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);
  
  // Add the list item to the task list
  var taskList = document.getElementById("task-list");
  taskList.appendChild(listItem);
}
function addTask() {
  // Get the value of the input field
  var input = document.getElementById("input-task");
  var task = input.value;
  
  // Clear the input field
  input.value = "";
  
  // Create a new list item with the task as text
  var listItem = document.createElement("li");
  var taskText = document.createTextNode(task);
  listItem.appendChild(taskText);
  
  // Add a "delete" button to the list item
  var deleteButton = document.createElement("button");
  var deleteText = document.createTextNode("X");
  deleteButton.appendChild(deleteText);
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);
  
  // Add the list item to the task list
  var taskList = document.getElementById("task-list");
  taskList.appendChild(listItem);
}
