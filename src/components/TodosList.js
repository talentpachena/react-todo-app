import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map(todo => (
            //  each of the state data is present in the todo prop.
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      </div>
    )
  }
}

export default TodosList