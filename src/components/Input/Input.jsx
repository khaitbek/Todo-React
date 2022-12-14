import React,{useState} from 'react'
import "./input.css";

function Input({setInputText, inputText}) {
  const inputTextHandler = e => setInputText(e.target.value);
  return (
    <input value={inputText} setInputText={setInputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder='enter task' required/>
  )
}

export default Input