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
  return (
    <div>
      <div className="p-10">
        <h1>Tasks List</h1>
        <div>
          <label>
            Show :{" "}
            <select
              className="border"
              onChange={(e) => dispatch(setVisibilityFilter(e.target.value))}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </label>
        </div>
        <div className="m-5">
          <label>
            New Task :
            <input
              type="text"
              className="border p-1 rounded"
              value={taskValue}
              onChange={handleChange}
            />
          </label>
          <button
            className="border p-1 rounded"
            onClick={() => dispatch(addTask())}
          >
            Add Task
          </button>
        </div>
        <ul className="flex flex-col border rounded p-5">
          {filteredTask().map((task) => (
            <li key={task.id} className="m-1 border rounded-md p-2">
              <input
                type="checkbox"
                value={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <label className="m-3">{task.text}</label>
              <button
                onClick={() => dispatch(removeTask(task.id))}
                className="border p-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
