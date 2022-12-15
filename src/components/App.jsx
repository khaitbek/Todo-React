import Form from "./Form/Form"
import TodoList from './TodoList/TodoList';
import "../styles/styles.css";
import { useState } from 'react';
import Dialog from "./Dialog/Dialog";

function App() {
  const [inputText, setInputText] = useState("");
  const [dialogState, setDialogState] = useState(false);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  // save todos to localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
  return (
    <>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} dialogState={dialogState} setDialogState={setDialogState} />
      <Dialog todos={todos} setTodos={setTodos} dialogState={dialogState} setDialogState={setDialogState} />
    </>
  )
}

export default App
