import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [filter, setFilter] = useState("all")
    const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Find a job",
      completed: true,
    },
    {
      id: 2,
      text: "Get married",
      completed: false,
    },
    {
        id: 3,
        text: "Gain status",
        completed: true,
      },
  ]);

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);

  const values = {
    todos,
    setTodos,
    addTodo,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};
