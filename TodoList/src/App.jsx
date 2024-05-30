import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isComplete, setIsComplete] = useState();
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (todo.trim() !== "") {
      if (editId) {
        setTodos(todos.map((t) => (t.key === editId ? { ...t, Text: todo } : t)));
        setEditId(null);
      } else {
        setTodos([...todos, { Text: todo, isComplete: false, key: uuidv4() }]);
      }
      setTodo("");
    }
  };

  const deleteTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
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
  };

  const editTodo = (key) => {
    const todoToEdit = todos.find((todo) => todo.key === key);
    setEditId(key);
    setTodo(todoToEdit.Text);
  };

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 bg-violet-600 rounded">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-around md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Todo List</h2>
            <p className="mt-1 text-sm text-gray-700"></p>
          </div>
          <div className="w-full md:w-1/3">
            <input
              value={todo}
              className="flex h-10 w-full rounded-md border bg-white border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              onChange={handleInputChange}
              placeholder="Todo List"
            />
          </div>
          <div>
            <button
              onClick={addTodo}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {editId ? "Update" : "Save"}
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        <span>Title</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
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
                    <tbody key={todo.key} className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4">{todo.Text}</td>

                        <td className="whitespace-nowrap px-4 py-4">
                          <span
                            onClick={() => toggleComplete(todo.key)}
                            className={`inline-flex rounded-full cursor-pointer px-2 text-xs font-semibold leading-5 ${todo.isComplete ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                          >
                            {todo.isComplete ? "Complete" : "Pending..."}
                          </span>
                        </td>
                        <td className="whitespace-nowrap cursor-pointer px-4 py-4 text-sm text-gray-700">
                          <span
                            onClick={() => {
                              deleteTodo(todo.key);
                            }}
                            className="inline-flex rounded-full cursor-pointer bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
                          >
                            Delete
                          </span>
                        </td>
                        <td className="cursor-pointer whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a
                            onClick={() => {
                              editTodo(todo.key);
                            }}
                            className="text-gray-700"
                          >
                            Edit
                          </a>
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
    </>
  );
}

export default App;
