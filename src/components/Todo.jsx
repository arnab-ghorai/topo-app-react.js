import Inp from "./Inp";
import Alltodo from "./Alltodo";
import { useState } from "react";
import Incotodo from "./Incotodo";
import Cotodo from "./Cotodo";

function Todo() {
  const [buttons, setbuttons] = useState([
    { name: "All", click: true, idx: 0 },
    { name: "Pending", click: false, idx: 1 },
    { name: "Completed", click: false, idx: 2 },
  ]);

  const handleButton = (index) => {
    const newState = buttons.map((button) => {
      if (button.idx === index) {
        return { ...button, click: true };
      } else {
        return { ...button, click: false };
      }
    });

    setbuttons(newState);
  };

  const [idx0, idx1, idx2] = buttons;

  return (
    <>
      <Inp></Inp>

      <div className="filterWrapper">
        {buttons.map((button) => (
          <button
            className={"filter"}
            style={{
              background: button.click ? "#0070bb" : null,
              color: button.click ? "white" : null,
            }}
            key={button.name}
            onClick={() => handleButton(button.idx)}
          >
            {button.name}
          </button>
        ))}
      </div>

      {idx0.click && <Alltodo />}
      {idx1.click && <Incotodo />}
      {idx2.click && <Cotodo />}
    </>
  );
}
export default Todo;
