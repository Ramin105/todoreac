import React from "react";
import { useState } from "react";
function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const Todo = () => {
    console.log(text);
    const todo = {
      text: text,
    };
    setTodos((newTodo) => [...newTodo, todo]);
  };
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={Todo}>Click</button>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
