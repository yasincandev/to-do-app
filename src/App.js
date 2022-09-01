import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: new Date().getTime(),
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="container">
      <AddTodo handleChange={handleChange} addTask={addTask} value={newTask} />
      <div className="list-container">
        {todoList.map((task) => {
          return (
            <TodoList
              key={task.id}
              completed={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}
              taskName={task.taskName}
              id={task.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
