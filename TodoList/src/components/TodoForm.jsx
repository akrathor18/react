import React from 'react'
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoForm() {
    const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isComplete, setIsComplete] = useState();
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos);
  }, []);
  window.onbeforeunload = function() {
    saveToLocal()
    console.log("Window is about to be refreshed or navigated away from.");
};
  const saveToLocal = () => {
    
    localStorage.setItem("todos", JSON.stringify(todos))
  };

  const addTodo = () => {
    if (todo.trim() !== "") {
      if (editId) {
        setTodos(
          todos.map((t) => (t.key === editId ? { ...t, Text: todo } : t))
        );
        setEditId(null);
      } else {
        setTodos([...todos, { Text: todo, isComplete: false, key: uuidv4() }]);
      }
      setTodo("");
      saveToLocal()
      
    }
  };


  const deleteTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
    saveToLocal()
    
  };

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const toggleComplete = (key) => {
    setTodos(
      todos.map((todo) =>
        todo.key === key ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
    saveToLocal()
  };

  const editTodo = (key) => {
    const todoToEdit = todos.find((todo) => todo.key === key);
    setEditId(key);
    setTodo(todoToEdit.Text);
    saveToLocal()
  };
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4 bg-violet-600 rounded dark:bg-violet-900">
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-around md:space-y-0">
      <div>
        <h2 className="text-lg font-semibold text-white">Todo List</h2>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300"></p>
      </div>
      <div className="w-full md:w-1/3">
        <input
          value={todo}
          className="flex h-10 w-full rounded-md border bg-white border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white"
          type="text"
          onChange={handleInputChange}
          placeholder="Todo List"
        />
      </div>
      <div>
        <button
          onClick={addTodo}
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {editId ? "Update" : "Save"}
        </button>
       
      </div>
    </div>
    <div className="mt-6 flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-center text-sm font-normal text-gray-700 dark:text-gray-300"
                  >
                    <span>Title</span>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-center text-sm font-normal text-gray-700 dark:text-gray-300"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-center text-sm font-normal text-gray-700 dark:text-gray-300"
                  >
                    Delete
                  </th>
                  <th
                    scope="col"
                    className="relative px-4 py-3.5 text-center"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              {todos.map((todo) => (
                <tbody
                  key={todo.key}
                  className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900"
                >
                  <tr>
                    <td 
                   
                    className={`whitespace-nowrap px-4 py-4 text-gray-900 dark:text-gray-300`}>
                      {todo.Text}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <button
                        onClick={() => toggleComplete(todo.key)}
                        className={`inline-flex rounded-full cursor-pointer px-2 text-xs font-semibold leading-5 ${
                          todo.isComplete
                            ? "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900"
                        }`}
                      >
                        {todo.isComplete ? "Complete" : "Pending..."}
                      </button>
                    </td>
                    <td className="whitespace-nowrap cursor-pointer px-4 py-4 text-sm text-gray-700 dark:text-gray-300">
                      <button
                        onClick={() => {
                          deleteTodo(todo.key);
                        }}
                        className="inline-flex rounded-full cursor-pointer bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800 dark:bg-red-200 dark:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="cursor-pointer whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          editTodo(todo.key);
                        }}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
