import Todo from "./components/Todo";
import AppName from "./components/AppName";
import "./App.css";
import TodoContextProvider from "./store/todo-store";

function App() {
  return (
    <TodoContextProvider>
      <center>
        <AppName></AppName>
        <div className="wrapper">
          <Todo></Todo>
        </div>
      </center>
    </TodoContextProvider>
  );
}

export default App;
