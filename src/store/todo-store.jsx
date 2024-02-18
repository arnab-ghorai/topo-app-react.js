import { createContext, useState } from "react";

export const TodoContext = createContext({
  intodo: [],
  cotodo: [],
  handleNewItem: () => {},
  handleDeleteTodo: () => {},
  handleTick: () => {},
});

function TodoContextProvider({ children }) {
  const [intodo, setintodo] = useState([
    { name: "incomp", date: "today", comp: false },
  ]);
  const [cotodo, setcotodo] = useState([
    { name: "comp", date: "today", comp: true },
  ]);

  const handleNewItem = (newName, newDate) => {
    if (newName !== "" && newDate !== "") {
      const newintodo = [
        { name: newName, date: newDate, comp: false },
        ...intodo,
      ];
      setintodo(newintodo);
    }
  };

  const handleDeleteTodo = (delTodo, index) => {
    if (delTodo.comp) {
      const newTodo = [...cotodo];
      newTodo.splice(index, 1);
      setcotodo(newTodo);
    } else {
      const newTodo = [...intodo];
      newTodo.splice(index, 1);
      setintodo(newTodo);
    }
  };

  const handleTick = (swapTodo, index) => {
    if (swapTodo.comp) {
      const newCotodo = [...cotodo];
      newCotodo.splice(index, 1);
      setcotodo(newCotodo);

      const newIntodo = [
        ...intodo,
        { name: swapTodo.name, date: swapTodo.date, comp: false },
      ];
      setintodo(newIntodo);
    } else {
      const newIntodo = [...intodo];
      newIntodo.splice(index, 1);
      setintodo(newIntodo);

      const newCotodo = [
        { name: swapTodo.name, date: swapTodo.date, comp: true },
        ...cotodo,
      ];
      setcotodo(newCotodo);
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
