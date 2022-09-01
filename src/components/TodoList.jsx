import React from "react";

const TodoList = (props) => {
  return (
    <div
      style={{ backgroundColor: props.completed ? "#456d45" : "" }}
      className="todo-list"
    >
      <div className="todo-list-container">
        <li className="todo-nobullet">{props.taskName}</li>
      </div>
      <div className="buttons">
        <button
          onClick={() => props.deleteTask(props.id)}
          className="delete-btn"
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button
          className="delete-btn"
          onClick={() => props.completeTask(props.id)}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
