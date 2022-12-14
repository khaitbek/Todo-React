import React from 'react'
import Input from '../Input/Input';
import uuid from 'react-uuid';
import "./form.css";

function Form({setInputText, inputText, todos, setTodos}) {
  const addTodo = title => {
    uuid
    const newTodo = {
      title,
      id:uuid(),
      completed:false
    };
    setTodos([...todos,newTodo]);
    setInputText("");
  }
  const formSubmitHandler = evt => {
    evt.preventDefault();
    addTodo(inputText);
  }
  return (
    <form action="#" className="todo-form"  onSubmit={formSubmitHandler}>
        <Input setInputText={setInputText} inputText={inputText}/>
        <button className='form-btn' type="submit">ADD</button>
    </form>
  )
}

export default Form