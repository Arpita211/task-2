const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add Task
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark as complete
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete Button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent li toggle
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
