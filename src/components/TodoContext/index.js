import { createContext, useState } from "react";
// import { TodoButton } from "./components/TodoButton";
// import { TodoCounter } from "./components/TodoCounter";
// import { TodoItem } from "./components/TodoItem";
// import { TodoList } from "./components/TodoList";
// import { TodoSearch } from "./components/TodoSearch";
import { useLocalStorage } from "./useLocalStorage";
// import { AppUI } from "./AppUI";

// localStorage.removeItem("MyTodos");

// const defaultTodos = [
//   { text: "Do my homework", completed: true },
//   { text: "Make dinner", completed: false },
//   { text: "Clean the house", completed: true },
// ];

// localStorage.setItem("MyTodos", JSON.stringify(defaultTodos));

const TodoContext = createContext();

function TodoProvider({ children }) {
  //   const localStorageToDos = localStorage.getItem("MyTodos");
  //   let parsedTodos;

  //   if (!localStorageToDos) {
  //     localStorage.setItem("MyTodos", JSON.stringify([]));
  //     parsedTodos = [];
  //   } else {
  //     parsedTodos = JSON.parse(localStorageToDos);
  //   }

  // const saveTodos = (newTodos) => {
  //     localStorage.setItem("MyTodos", JSON.stringify(newTodos));
  //     setTodos(newTodos);
  //   };

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("MyTodos", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Estados derivados:
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const checkTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // Agregar ToDo

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      text,
      completed: false,
    });

    saveTodos(newTodos);
  };

  return (
    // <div className="App">
    //   <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

    //   <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

    //   <TodoList>
    //     {searchedTodos.map((todo) => (
    //       <TodoItem
    //         text={todo.text}
    //         completed={todo.completed}
    //         key={todo.text}
    //         onComplete={() => checkTodo(todo.text)}
    //         onDelete={() => deleteTodo(todo.text)}
    //       />
    //     ))}
    //   </TodoList>

    //   <TodoButton />
    // </div>
    <TodoContext.Provider
      value={{
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
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
