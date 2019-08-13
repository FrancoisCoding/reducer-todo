import React from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="new todo"
        onChange={handleChange}
        value={task}
      />
      <div>
        <button type="submit">Add</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
};

export default TodoForm;
