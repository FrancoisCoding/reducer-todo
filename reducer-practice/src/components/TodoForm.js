import React from "react";

// Destructured props
const TodoForm = ({ addTodo, clear, task, handleChange }) => {
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(task);
  };
  const handleClear = event => {
    event.preventDefault();
    clear();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Task for today..."
          onChange={handleChange}
          value={task}
        />
        <button type="submit">Add</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
};

export default TodoForm;
