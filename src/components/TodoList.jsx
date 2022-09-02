import React from "react";

const TodoList = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.completed ? " #456d45" : "",
        transition: props.completed
          ? "background-color 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
          : "",
      }}
      className="todo-list"
    >
      <div className="todo-list-container">
        <li className="todo-nobullet">{props.taskName}</li>
      </div>
      <div className="buttons">
        <button onClick={() => props.deleteTask(props.id)} className="todo-btn">
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button
          className="todo-btn"
          onClick={() => props.completeTask(props.id)}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
