import React, { useState, useRef,useEffect  } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";


const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef(null);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="flex flex-col w-11/12 max-w-md bg-white place-self-center p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center gap-2 mt-7">
        <img src={todo_icon} className="w-8" alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      <div className="flex items-center justify-between bg-gray-300 rounded-full mt-7">
        <input
          ref={inputRef}
          className="flex-1 w-full p-3 pl-6 pr-2 bg-transparent border-0 outline-none h-14 placeholder:text-gray-400"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="w-32 text-lg font-medium text-white bg-orange-600 border-none rounded-full cursor-pointer h-14"
        >
          ADD +
        </button>
      </div>

      <div>
        {todoList.map((item, index) => (
          <TodoItems
            key={item.id}
            id={item.id}
            text={item.text}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
