import React, { useReducer } from "react";
import "./App.css";
import { initialState, todoReducer } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

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
    <div>
      <h2>What Do You Have For Today?</h2>
      <div>
        <TodoForm
          // Pass down props
          addTodo={addTodo}
          clear={clear}
          handleChange={handleChange}
          task={state.task}
        />
        <TodoList
          // Pass down props
          todosList={state.todos}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
