import React, { useState } from "react";
import './App.css';
import Form from "./Form";
import Todolist from "./Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header><h1>Lista de Compras</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}></Form>
      <Todolist setTodos={setTodos} todos={todos}/>
      
      
    </div>
  );
}

export default App;
