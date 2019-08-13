import React from "react";

const Todo = ({ id, task, completed, toggleCompleted }) => {
  return (
    <div
      className={"task" + (completed ? " completed" : "")}
      onClick={() => toggleCompleted(id)}
    >
      {task}
    </div>
  );
};

export default Todo;
