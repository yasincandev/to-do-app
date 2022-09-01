import React from "react";

const AddTodo = (props) => {
  return (
    <div className="left-container">
      <h1 className="header">
        What Do You <br /> Want ToDo?
      </h1>
      <input
        onChange={props.handleChange}
        value={props.value}
        className="todo-input"
      />
      <button className="add-btn" onClick={props.addTask}>
        Add To Do
      </button>
    </div>
  );
};

export default AddTodo;
