const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');

let taskId = 1;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="task${taskId}">
      <label for="task${taskId}">${taskText}</label>
      <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    taskId++;

    updateTotalTasks();
  }
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);

  updateTotalTasks();
}

function updateTotalTasks() {
  const total = taskList.getElementsByTagName('li').length;
  totalTasks.textContent = `Total tasks: ${total}`;
}

function toggleChecked(event) {
  const listItem = event.target.parentElement;
  listItem.classList.toggle('checked');
}

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteButton')) {
    deleteTask(event);
  } else if (event.target.tagName === 'LABEL') {
    toggleChecked(event);
  }
});

function selectAllTasks() {
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
      checkbox.parentElement.classList.add('checked');
    });
  }
  
  function deselectAllTasks() {
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.parentElement.classList.remove('checked');
    });
  }
  
  function updateTotalTasks() {
    const total = taskList.getElementsByTagName('li').length;
    totalTasks.textContent = `Total tasks: ${total}`;
  }
  
  const selectAllButton = document.getElementById('selectAllButton');
  selectAllButton.addEventListener('click', () => {
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
    const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
  
    if (allChecked) {
      deselectAllTasks();
    } else {
      selectAllTasks();
    }
  });

  
  function deleteAllTasks() {
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const listItem = checkbox.parentElement;
        taskList.removeChild(listItem);
      }
    });
  
    updateTotalTasks();
  }
  
  const deleteAllButton = document.getElementById('deleteAllButton');
  deleteAllButton.addEventListener('click', deleteAllTasks);
  
