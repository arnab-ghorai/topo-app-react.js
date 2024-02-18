import { useContext } from "react";
import { TodoContext } from "../store/todo-store";
import Welcome from "./Welcome";
import Column from "./Column";

function Alltodo() {
  const { intodo, cotodo, handleDeleteTodo, handleTick } =
    useContext(TodoContext);
  return (
    <>
      {(intodo.length !== 0 || cotodo.length !== 0) && <Column />}
      {intodo.map((todo, index) => {
        return (
          <div key={index} className="eachTask">
            <div>{todo.name}</div>
            <div>{todo.date}</div>
            <div className="tickDeleteWrapper">
              <input
                className="box"
                type="checkbox"
                checked={todo.comp}
                onChange={() => handleTick(todo, index)}
              />
              <button
                className="deleteBtn"
                onClick={() => {
                  handleDeleteTodo(todo);
                }}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        );
      })}

      {cotodo.map((todo, index) => {
        return (
          <div key={index} className="eachTask">
            <div style={{ textDecoration: "line-through" }}>{todo.name}</div>
            <div style={{ textDecoration: "line-through" }}>{todo.date}</div>
            <div className="tickDeleteWrapper">
              <input
                className="box"
                type="checkbox"
                checked={todo.comp}
                onChange={() => handleTick(todo, index)}
              />
              <button
                className="deleteBtn"
                onClick={() => {
                  handleDeleteTodo(todo, index);
                }}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        );
      })}

      {intodo.length === 0 && cotodo.length === 0 && <Welcome />}
    </>
  );
}

export default Alltodo;
