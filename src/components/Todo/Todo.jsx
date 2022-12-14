import React from 'react'
import "./todo.css";
function Todo({id,title,completed,todos,setTodos,dialogState, setDialogState}) {
  const editBtnHandler = evt =>{
    const todoId = evt.target.dataset.id;
    setDialogState([true,todoId]);
  }
  const deleteTodoHandler = evt =>{
    const todoId = evt.target.dataset.id;
    const newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodos);
  }
  const completeTodoHandler = evt => {
    const todoId = evt.target.dataset.id;
    const newTodos = [...todos];
    const foundTodo = newTodos.find(todo => todo.id === todoId);
    foundTodo.completed = !foundTodo.completed;
    setTodos(newTodos);

  }
  return (
    <li className={completed ? "todo-item completed" : "todo-item"} >
      <div className="todo-inner">
        <h3 className="todo-title">{title}</h3>
      </div>
      <div className="todo-outer">
        <input type="checkbox" className="complete-todo" defaultChecked={completed} onChange={completeTodoHandler} data-id={id} />
        <button className='edit-todo' type='button' onClick={editBtnHandler} data-id={id}>
          EDIT
        </button>
        <button className='delete-todo' type='button' onClick={deleteTodoHandler} data-id={id}>
          DELETE
        </button>
      </div>
    </li>
  )
}

export default Todo