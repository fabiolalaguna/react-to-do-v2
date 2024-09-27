import { TodoCounter } from "../components/TodoCounter/index";
import { TodoSearch } from "../components/TodoSearch/index";
import { TodoList } from "../components/TodoList/index";
import { TodoItem } from "../components/TodoItem/index";
import { TodoButton } from "../components/TodoButton/index";
import { TodoLoading } from "../components/TodoLoading/index";
import { TodoError } from "../components/TodoError";
import { TodosEmpty } from "../components/TodosEmpty/index";
import { useContext } from "react";
import { TodoContext } from "../components/TodoContext";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import "../index.css";

function AppUI() {
  const {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    checkTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className={`${openModal && "md-bg"}`}>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && searchedTodos.length === 0 && <TodosEmpty />}

        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
            onComplete={() => checkTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
