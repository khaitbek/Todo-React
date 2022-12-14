import React,{useState} from 'react'
import "./dialog.css";
function Dialog({dialogState,setDialogState, todos,setTodos}) {
    const [inputText, setInputText] = useState("");
    const editTodoHandler = evt => {
        evt.preventDefault();
        if(!inputText) return closeDialogHandler();
        const todoId = dialogState[1];
        const newTodos = [...todos];
        const foundTodo = newTodos.find(todo => todo.id === todoId);
        foundTodo.title = inputText;
        setTodos(newTodos)
        closeDialogHandler();
    }
    const inputTextHandler = evt => setInputText(evt.target.value);
    const closeDialogHandler = ()=> setDialogState(false);
  return (
    <dialog className='todo-dialog' open={dialogState}>
        <form action="#" className="edit-form" onSubmit={editTodoHandler}>
            <input value={inputText} type="text" className="edit-input" onChange={inputTextHandler}/>
            <button type="submit">EDIT</button>
            <button type='button' onClick={closeDialogHandler}>Close</button>
        </form>
    </dialog>
  )
}

export default Dialog