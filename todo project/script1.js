document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerText = taskText;
        
        taskItem.addEventListener('dblclick', () => {
            taskItem.classList.toggle('completed');
        });

        const editButton = document.createElement('div');
        editButton.classList.add('edit');
        editButton.innerText = 'Edit';
        editButton.onclick = () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskItem.innerText = newTaskText.trim();
                taskItem.appendChild(editButton);
                taskItem.appendChild(deleteButton);
            }
        };
        
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
    }
}
