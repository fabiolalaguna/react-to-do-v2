import ReactDom from "react-dom";
import { ModalCss } from "./Modal.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext/index";

function Modal({ children }) {
  const { openModal } = useContext(TodoContext);

  return ReactDom.createPortal(
    <div className={`${openModal && "ModalCss md-bg"}`}>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
