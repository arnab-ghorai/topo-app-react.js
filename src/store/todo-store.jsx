import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext({
  intodo: [],
  cotodo: [],
  handleNewItem: () => {},
  handleDeleteTodo: () => {},
  handleTick: () => {},
});

function TodoContextProvider({ children }) {
  const [intodo, setintodo] = useState([]);
  const [cotodo, setcotodo] = useState([]);

  useEffect(() => {
    let intodoStr = localStorage.getItem("intodo");
    intodoStr ? setintodo(JSON.parse(localStorage.getItem("intodo"))) : null;

    let cotodoStr = localStorage.getItem("cotodo");
    cotodoStr ? setcotodo(JSON.parse(localStorage.getItem("cotodo"))) : null;
  }, []);

  const handleNewItem = (newName, newDate) => {
    if (newName !== "" && newDate !== "") {
      const newintodo = [
        { name: newName, date: newDate, comp: false },
        ...intodo,
      ];
      setintodo(newintodo);
      localStorage.setItem("intodo", JSON.stringify(newintodo));
    }
  };

  const handleDeleteTodo = (delTodo, index) => {
    if (delTodo.comp) {
      const newTodo = [...cotodo];
      newTodo.splice(index, 1);
      setcotodo(newTodo);
      localStorage.setItem("cotodo", JSON.stringify(newTodo));
    } else {
      const newTodo = [...intodo];
      newTodo.splice(index, 1);
      setintodo(newTodo);
      localStorage.setItem("intodo", JSON.stringify(newTodo));
    }
  };

  const handleTick = (swapTodo, index) => {
    if (swapTodo.comp) {
      const newCotodo = [...cotodo];
      newCotodo.splice(index, 1);
      setcotodo(newCotodo);
      localStorage.setItem("cotodo", JSON.stringify(newCotodo));

      const newIntodo = [
        ...intodo,
        { name: swapTodo.name, date: swapTodo.date, comp: false },
      ];
      setintodo(newIntodo);
      localStorage.setItem("intodo", JSON.stringify(newIntodo));
    } else {
      const newIntodo = [...intodo];
      newIntodo.splice(index, 1);
      setintodo(newIntodo);
      localStorage.setItem("intodo", JSON.stringify(newIntodo));

      const newCotodo = [
        { name: swapTodo.name, date: swapTodo.date, comp: true },
        ...cotodo,
      ];
      setcotodo(newCotodo);
      localStorage.setItem("cotodo", JSON.stringify(newCotodo));
    }
  };

  return (
    <TodoContext.Provider
      value={{
        intodo,
        cotodo,
        handleNewItem,
        handleDeleteTodo,
        handleTick,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
