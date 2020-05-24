(function() {

    const addTaskInputElement = document.querySelector('#add-task');
    const taskListElement = document.querySelector('.tasks__list');

    function handleTaskInputChange(event) {
        const inputValue = event.target.value;
        
        const task = createTask(inputValue);
        taskListElement.appendChild(task);

        addTaskInputElement.value = null;
    }

    function createTask(taskName) {
        const taskTemplate = document.querySelector('#task-template');
        const newTask = taskTemplate.content.cloneNode(true);

        const taskNameElement = newTask.querySelector('.task__name');
        taskNameElement.innerText = taskName;

        return newTask;
    }

    addTaskInputElement.addEventListener('change', handleTaskInputChange);
})();