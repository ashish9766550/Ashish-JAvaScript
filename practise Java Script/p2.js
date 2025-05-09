const taskInput = document.getElementById('task');
const addButton = document.querySelector('.add');
const removeButton = document.querySelector('.remove');
const taskList = document.querySelector('.list');
function addtask(){
    const tasktext=taskInput.value.trim();


if (tasktext===''){
    alert("enter the task");
    return
}
const li=document.createElement("li")
li.textContent=tasktext;
li.addEventListener('click',()=>{
    li.classList.toggle("completed");
});
taskList.appendChild(li);
taskInput.value='';
}
function removeAllTasks() {
  taskList.innerHTML = '';
}
addButton.addEventListener('click', addtask);
removeButton.addEventListener('click', removeAllTasks);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addtask();
  }
});