import React from "react";
import { BsCheck2 } from "react-icons/bs";

import "./index.css";

function CompleteIcon({ completed, onClick }) {
  return (
    <span
      className={`icon-check ${completed && "icon-check-active"}`}
      completed={completed}
      onClick={onClick}
    >
      <BsCheck2 />
    </span>
  );
}

export { CompleteIcon };
