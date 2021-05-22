import React, { useState } from "react";
import "./index.css";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Build todo app",
      isCompleted: true
    },
    {
      text: "Shopping",
      isCompleted: false
    },
    {
      text: "Meet friend for dinner",
      isCompleted: false
    }
  ]);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const addTodo = (text) => {
    if (text) {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
      setValue("");
      setError("");
    } else {
      setError("invalid value");
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted !== true) {
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
      setError("");
    } else {
      setError("already completed");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <div className="form">
          <input
            className="input"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="submit-button" onClick={() => addTodo(value)}>
            Add ToDo
          </button>
        </div>
      </div>
      <div className="error">
        <span>{error}</span>
      </div>
    </div>
  );
};
export default App;
