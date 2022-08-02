const todosNode = document.querySelector('.todo__list');
const inputNode = document.querySelector('.todo__input');
const btntNode = document.querySelector('.todo__btn-add');

let todos = [];

function addTodo(text) {
  if (text === '') {
    return;
  }

  const todo = {
    text,
    done: false,
    id: `${Math.random()}`
  };

  todos.push(todo);
}

function deleteTodo(id) {
  todos.forEach(todo => {
    if (todo.id === id) {
      todo.done = true;
    }
  });
}

function render() {
  let html = '';

  todos.forEach(todo => {
    if (todo.done) {
      return;
    };

    html += `
      <li class="todo__item">
        <p class="todo__text">${todo.text}</p>
        <button class='todo__btn-delete' type='button' data-id='${todo.id}'>
          <svg class="todo__btn-delete-icon" width="25" height="25" data-id='${todo.id}'>
            <use xlink:href="#tick" data-id='${todo.id}'></use>
          </svg>
        </button> 
      </li>
    `;
  });

  todosNode.innerHTML = html;
}

btntNode.addEventListener('click', () => {
  const text = inputNode.value;
  inputNode.value = '';
  addTodo(text);
  render();
});

todosNode.addEventListener('click', (evt) => {
  console.log(evt.target.tagName)
  if (evt.target.tagName === 'BUTTON' || evt.target.tagName === 'svg' || evt.target.tagName === 'use') {
    const id = evt.target.dataset.id;
    deleteTodo(id);
    render();
  } else {
    return;
  }
});

render();
