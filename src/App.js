import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

function todoReducer(state, action) {
  return state;
}

const initialState = {};
function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([
    {
      task: "Example Todo",
      id: 1528817077286,
      completed: false
    }
  ]);

  const clearTodos = () => {
    setTodo([
      {
        task: "Example Todo",
        id: 1528817077286,
        completed: false
      }
    ]);
  };

  const addTodos = event => {
    event.preventDefault();
    setTask({});
    setTodo([...todo, task]);
  };

  const handleChange = event => {
    event.preventDefault();
    setTask({
      [event.target.name]: event.target.value,
      id: Date.now(),
      completed: false
    });
  };

  const deleteItem = id => {
    console.log("deleted");
    const filteredItems = todo.filter(item => {
      return item.id !== id;
    });
    setTodo(filteredItems);
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  console.log("todo", todo);
  return (
    <div>
      <h1>Tasks</h1>
      <TodoList toDoList={todo} deleteItem={deleteItem} />
      <TodoForm
        clear={clearTodos}
        add={addTodos}
        toDoList={todo}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
