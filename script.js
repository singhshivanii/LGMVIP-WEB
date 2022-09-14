let inputField = document.getElementById('inputField');
let addTodo = document.getElementById('addTodo');
let todoContainer = document.getElementById('todoContainer');

addTodo.addEventListener('click', () => {
  const str = inputField.value.trim();
  if(str.length == 0){
    alert('You must enter a task!');
    return;
  }

  let taskFinished = false;
  const paragraph = document.createElement('p');
  const finishTodo = document.createElement('button');
  const delTodo = document.createElement('button');
  const div = document.createElement('div');
  const br = document.createElement('br');

  div.classList.add('actions')
  finishTodo.id = 'finish-btn';
  finishTodo.innerText = 'Finish';
  delTodo.id = 'delete-btn';
  delTodo.innerText = 'Delete';

  paragraph.innerText = inputField.value;
  paragraph.classList.add('todo-item');
  todoContainer.appendChild(paragraph);
  div.appendChild(finishTodo);
  div.appendChild(delTodo);
  todoContainer.appendChild(div);
  todoContainer.appendChild(br);
  inputField.value = '';

  finishTodo.addEventListener('click', () => {
    if(!taskFinished){
      paragraph.style.textDecoration = 'line-through';
      taskFinished = true;
      finishTodo.innerText = 'Undo';
    } else{
      paragraph.style.textDecoration = 'none';
      taskFinished = false;
      finishTodo.innerText = 'Finish'
    }
  });

  delTodo.addEventListener('click', () => {
    todoContainer.removeChild(paragraph);
    todoContainer.removeChild(div);
  });
  
});

inputField.addEventListener("keypress", (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      addTodo.click();
    }
  });