import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        task: "",
        id: "",
        completed: false
      },
      todoData: [
        {
          task: "Example Todo",
          id: 1528817077286,
          completed: false
        }
      ]
    };
  }

  clearTodos = () => {
    this.setState({
      todoData: [
        {
          task: "Example Todo",
          id: 1528817077286,
          completed: false
        }
      ]
    });
  };

  addTodos = event => {
    event.preventDefault();
    this.setState({
      task: {},
      todoData: [...this.state.todoData, this.state.task]
    });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      task: {
        [event.target.name]: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  deleteItem = id => {
    console.log("deleted");
    const filteredItems = this.state.todoData.filter(item => {
      return item.id !== id;
    });
    this.setState({
      todoData: filteredItems
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <TodoList toDoList={this.state.todoData} deleteItem={this.deleteItem} />
        <TodoForm
          clear={this.clearTodos}
          add={this.addTodos}
          toDoList={this.state.todoData}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
