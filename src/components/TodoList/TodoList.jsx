import React from 'react'
import Todo from '../Todo/Todo';
import "./todos.css";
function TodoList({todos,setTodos,dialogState, setDialogState}) {
  return (
    <ul className="todo-list">
        {
          todos.map(todo => <Todo key={todo.id} title={todo.title} id={todo.id} completed={todo.completed}  todos={todos} setTodos={setTodos} dialogState={dialogState} setDialogState={setDialogState}/>)
        }
    </ul>
  )
}

export default TodoList