import React from "react";

import TodoForms from "../components/TodoForms";
import Todolist from "../components/TodoList";
import { ITodo } from "../interfaces";
interface IState {
  todos: ITodo[];
}
declare var confirm: (question: string) => boolean;
export default class TodoPage extends React.Component<{}, IState> {
  state = {
    todos: JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]
  };

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addHandler = (title: string) => {
    if (title === "") return;
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };

    this.setState(prev => ({
      todos: [newTodo, ...prev.todos]
    }));
  };

  toggleHandler = (id: number): void => {
    this.setState(prev => {
      prev.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return prev.todos;
      });
      return {
        todos: prev.todos
      };
    });
  };
  removeHandler = (id: number) => {
    let remove: boolean = false;
    remove = confirm("Are you sure you want to delete the task?");
    if (remove) {
      this.setState(prev => {
        return {
          todos: prev.todos.filter(todo => todo.id !== id)
        };
      });
    }
  };
  render() {
    return (
      <>
        <TodoForms onAdd={this.addHandler} />
        <Todolist
          todos={this.state.todos}
          onToggle={this.toggleHandler}
          onRemove={this.removeHandler}
        />
      </>
    );
  }
}
