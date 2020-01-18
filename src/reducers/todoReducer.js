export const initialState = {
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

export function todoReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        task: {
          [action.field]: action.value,
          id: Date.now(),
          completed: false
        }
      };
    }
    case "addTodo": {
      return {
        todoData: [...state.todoData, state.task]
      };
    }
    case "deleteTodo": {
      return id => ({
        ...state,
        todoData: state.todoData.filter(item => item.id !== id)
      });
    }
    case "clearTodo": {
      return {
        todoData: [
          {
            task: "Example Todo",
            id: 1528817077286,
            completed: false
          }
        ]
      };
    }
    default:
      break;
  }
  return state;
}
