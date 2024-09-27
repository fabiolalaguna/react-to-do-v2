import "./index.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
// import { IoClose } from "react-icons/io5";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      {/* <span
        className={`icon icon-check ${completed && "icon-check-active"}`}
        onClick={onComplete}
      >
        ✔️
      </span> */}
      <CompleteIcon completed={completed} onClick={onComplete} />

      <span className={`todoItem-p ${completed && "todoItem-p--complete"}`}>
        {text}
      </span>
      {/* <span onClick={onDelete}>❌</span> */}
      <DeleteIcon onClick={onDelete} />
    </li>
  );
}

export { TodoItem };
