import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { initialState, todoReducer } from "./reducers/todoReducer";
import "./components/TodoComponents/Todo.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("state inside App", state.todoData);

  const clearTodos = () => {
    dispatch({ type: "clearTodo" });
  };

  const handleChange = event => {
    event.preventDefault();
    dispatch({
      type: "field",
      field: "task",
      value: event.target.value
    });
  };

  const addTodos = event => {
    event.preventDefault();
    dispatch({ type: "addTodo" });
  };

  const deleteItem = id => {
    console.log("deleted");
    const filteredItems = state.todoData.filter(item => {
      return item.id !== id;
    });
    state.todoData = filteredItems;
    console.log(state.todoData);
  };

  console.log("state after delete", state.todoData);

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  return (
    <div>
      <h1>Tasks</h1>
      <TodoList toDoList={state.todoData} deleteItem={deleteItem} />
      <TodoForm
        clear={clearTodos}
        add={addTodos}
        toDoList={state.todoData}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
