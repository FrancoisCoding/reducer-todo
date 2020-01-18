import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo: {
        task: ""
      }
    };
  }
  render() {
    console.log(this.props.todo);
    return (
      <>
        <ol>
          <li onClick={this.props.onClick}>{this.props.todo.task}</li>
        </ol>
      </>
    );
  }
}
