import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    // <h1>
    //   You have completed {completedTodos} of {totalTodos} TODO's
    // </h1>
    totalTodos >= completedTodos ? (
      <h1 className="total">Completed ToDos</h1>
    ) : (
      <h1>
        You have completed <span className="completed">{completedTodos}</span>{" "}
        of
        <span className="total"> {totalTodos} </span> ToDos
      </h1>
    )
  );
}

export { TodoCounter };
