import { useContext, useState } from "react";
import { TodoContext } from "../store/todo-store";

function Inp() {
  const initialValues = { name: "", date: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const { handleNewItem } = useContext(TodoContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewItem(formValues.name, formValues.date);
    setFormValues(initialValues);
  };

  return (
    <div className="inpWrapper">
      <form onSubmit={handleSubmit}>
        <div className="bothInp">
          <fieldset id="one">
            <legend>Task</legend>
            <input
              id="taskInp"
              type="text"
              name="name"
              placeholder="Enter task..."
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset id="two">
            <legend>Due date</legend>
            <input
              id="dateInp"
              type="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
              required
            />
          </fieldset>
          <button className="add" id="three">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default Inp;

//Objects: While uncommon, some languages allow bracket notation to access object properties dynamically, particularly when the property name is unknown beforehand or computed on the fly.
