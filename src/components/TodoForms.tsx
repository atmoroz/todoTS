import React from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export default class TodoForms extends React.Component<TodoFormProps> {
  state = {
    title: ""
  };

  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: event.target.value
    });
  };

  keyPressHandler = (event: React.KeyboardEvent) => {
    const { onAdd } = this.props;
    if (event.key === "Enter") {
      onAdd(this.state.title);
      this.setState({
        title: ""
      });
    }
  };
  render() {
    return (
      <div className="todoForm">
        <div className="row">
          <div className="input-field col s12">
            <input
              value={this.state.title}
              id="todotext"
              type="text"
              className="validate"
              placeholder="Enter new task"
              onChange={this.changeHandler}
              onKeyPress={this.keyPressHandler}
            />
            <label className="active" htmlFor="todotext">
              Enter new task
            </label>
          </div>
        </div>
      </div>
    );
  }
}
