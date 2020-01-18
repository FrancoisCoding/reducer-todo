import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("todoList", this.props.toDoList);
    return (
      <div>
        {this.props.toDoList.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onClick={() => this.props.deleteItem(todo.id)}
          />
        ))}
      </div>
    );
  }
}
