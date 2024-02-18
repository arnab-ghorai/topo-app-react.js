import { useContext } from "react";
import { TodoContext } from "../store/todo-store";
import Welcome from "./Welcome";
import Column from "./Column";

function Cotodo() {
  const { cotodo, handleDeleteTodo, handleTick } = useContext(TodoContext);

  return (
    <>
      {cotodo.length !== 0 && <Column />}
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
      {cotodo.length === 0 && <Welcome />}
    </>
  );
}
export default Cotodo;
