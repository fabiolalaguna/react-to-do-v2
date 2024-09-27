import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      placeholder="Search..."
    />
  );
}

export { TodoSearch };
