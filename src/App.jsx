import { useSelector, useDispatch } from "react-redux";
import {
  toggleTask,
  removeTask,
  addTask,
  setTaskValue,
  setVisibilityFilter,
} from "./store";

function App() {
  const tasks = useSelector((state) => state.tasks.list);
  const taskValue = useSelector((state) => state.tasks.taskValue);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setTaskValue(value));
  };
  const filteredTask = () => {
    switch (visibilityFilter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "active":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="p-10" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Tasks List</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Show :{" "}
          <select
            className="border p-2 rounded"
            onChange={(e) => dispatch(setVisibilityFilter(e.target.value))}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <div className="mb-8 flex">
        <label className="block text-sm font-medium text-gray-600">
          New Task :
          <input
            type="text"
            className="border p-2 rounded"
            value={taskValue}
            onChange={handleChange}
          />
        </label>
        <button
          className="border p-2 rounded bg-blue-500 text-white hover:bg-blue-700"
          onClick={() => dispatch(addTask())}
        >
          Add Task
        </button>
      </div>
      <ul className="flex flex-col border rounded p-5">
        {filteredTask().map((task) => (
          <li
            key={task.id}
            className="m-1 border rounded-md p-2 flex items-center"
          >
            <input
              type="checkbox"
              value={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
              className="mr-3"
            />
            <label className="flex-grow">{task.text}</label>
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className="border p-1 rounded bg-red-500 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default App;
