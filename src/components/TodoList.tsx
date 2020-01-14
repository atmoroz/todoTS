import React from "react";
import { ITodo } from "../interfaces";
type TodolistProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export default class Todolist extends React.Component<TodolistProps, {}> {
  removeHandler = (event: React.MouseEvent, id: number) => {
    const { onRemove } = this.props;
    event.preventDefault();
    onRemove(id);
  };
  render() {
    const { todos, onToggle } = this.props;

    return (
      <ul>
        {todos.map(todo => {
          const classes = ["todo"];

          if (todo.completed) {
            classes.push("completed");
          }

          return (
            <li className={classes.join(" ")} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  onChange={onToggle.bind(null, todo.id)}
                />
                <span>{todo.title}</span>
                <i
                  className="material-icons red-text"
                  onClick={event => this.removeHandler(event, todo.id)}
                >
                  delete
                </i>
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
}
