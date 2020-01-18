import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.props.add}>
          <input
            type="text"
            value={this.props.toDoList.task}
            name="task"
            onChange={this.props.handleChange}
            required
          />
          <button onClick={this.props.add}>Add</button>
          <button onClick={this.props.clear}>Clear</button>
        </form>
      </div>
    );
  }
}
