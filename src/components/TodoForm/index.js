import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  function onChange(e) {
    setNewTodoValue(e.target.value);
  }

  function onCancel() {
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new ToDo</label>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Write something..."
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="buttons">
        <button onClick={onCancel} type="button" className="TodoForm cancel">
          Cancel
        </button>
        <button type="submit" className="TodoForm save">
          Save
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
