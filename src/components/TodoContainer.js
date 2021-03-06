import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer"

//stylesheet
import "../App.css"

class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    };
    // changing state of todo
    handleChange = id => {
        this.setState(prevState => ({
          todos: prevState.todos.map(todo => {
            if (todo.id == id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo;
          })
        }));
    };
    // return the todos items that do not match the id that will be passed in – i.e the clicked id
    delTodo = id => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id;
          })
        ]
      });
    };
    addTodoItem = title => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };
    render() {
        return (
            <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodoProps={this.addTodoItem} />
                  <TodosList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo}
                  />
                  <Footer />
                </div>
            </div>
        )
    }
}
export default TodoContainer