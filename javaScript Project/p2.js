(() => {
  // Select DOM elements
  const taskInput = document.getElementById('task');
  const addButton = document.querySelector('.add');
  const removeButton = document.querySelector('.remove');
  const taskList = document.querySelector('.list');

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle 'completed' class on click
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Append the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  };

  // Function to remove all tasks
  const removeAllTasks = () => {
    taskList.innerHTML = '';
  };

  // Event listeners
  addButton.addEventListener('click', addTask);
  removeButton.addEventListener('click', removeAllTasks);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
})();
