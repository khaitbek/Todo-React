import React from 'react'
import "./todo.css";
function Todo({id,title,completed,todos,setTodos, setDialogState}) {
  const editBtnHandler = id =>{
    setDialogState([true,id]);
  }
  const deleteTodoHandler = id =>{
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }
  const completeTodoHandler = id => {
    const newTodos = [...todos];
    const foundTodo = newTodos.find(todo => todo.id === id);
    foundTodo.completed = !foundTodo.completed;
    setTodos(newTodos);

  }
  return (
    <li className={completed ? "todo-item completed" : "todo-item"} >
      <div className="todo-inner">
        <h3 className="todo-title">{title}</h3>
      </div>
      <div className="todo-outer">
        <input type="checkbox" className="complete-todo" defaultChecked={completed} onChange={()=>completeTodoHandler(id)} />
        <button className='edit-todo' type='button' onClick={()=>editBtnHandler(id)}>
          EDIT
        </button>
        <button className='delete-todo' type='button' onClick={()=> deleteTodoHandler(id)}>
          DELETE
        </button>
      </div>
    </li>
  )
}

export default Todo