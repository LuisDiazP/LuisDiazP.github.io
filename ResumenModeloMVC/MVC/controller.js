// Modelo
const model = {
    tasks: [],
  };
  
  // Vista
  const view = {
    renderTasks: function() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
  
      model.tasks.forEach(function(task, index) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        taskList.appendChild(taskItem);
      });
    },
  };
  
  // Controlador
  const controller = {
    init: function() {

        model.tasks.push('Pasear al perro');
        model.tasks.push('Comprar lo huevos');
        model.tasks.push('Llamar a mama');

      view.renderTasks();
  
      const addTaskButton = document.getElementById('addTaskButton');
      addTaskButton.addEventListener('click', function() {
        const taskInput = document.getElementById('taskInput');
        const newTask = taskInput.value.trim();
  
        if (newTask !== '') {
          model.tasks.push(newTask);
          taskInput.value = '';
          view.renderTasks();
        }
      });
    },
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    controller.init();
  });
  