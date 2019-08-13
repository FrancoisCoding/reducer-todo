import React, { useReducer } from "react";
import "./App.css";
import { initialState, todoReducer } from "./reducers/todoReducer.js";

function App() {
  // Initialize useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Setup Functions that run dispatch which will be used to trigger actions and pass in parameters with payload
  const toggleCompleted = id =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  const addTodo = task => dispatch({ type: "ADD_TODO", payload: task });
  const clear = () => dispatch({ type: "CLEAR" });
  const handleChange = event =>
    dispatch({ type: "UPDATE", payload: event.target.value });

  return (
    <div className="App">
      <h1>Start</h1>
    </div>
  );
}

export default App;
