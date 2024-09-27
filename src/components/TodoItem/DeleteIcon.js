import React from "react";
import { BsX } from "react-icons/bs";

import "./index.css";

function DeleteIcon({ onClick }) {
  return (
    <span className="delete" onClick={onClick}>
      {" "}
      <BsX />
    </span>
  );
}

export { DeleteIcon };
