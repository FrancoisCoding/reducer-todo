import React from "react";
import Todo from "./Todo";

// Destructured props
const TodoList = ({ todosList, toggleCompleted }) => {
  return (
    <div>
      {todosList.map(todo => (
        <Todo key={todo.id} {...todo} toggleCompleted={toggleCompleted} />
      ))}
    </div>
  );
};

export default TodoList;
