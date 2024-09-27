import { CreateTodoButton } from "./TodoButton.css";

function TodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((open) => !open);
      }}
    >
      +
    </button>
  );
}

export { TodoButton };
