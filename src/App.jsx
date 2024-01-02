import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask, addTask, setTaskValue } from "./store";

function App() {
  const tasks = useSelector((state) => state.tasks.list);
  const taskValue = useSelector((state) => state.tasks.taskValue);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setTaskValue(value));
  };
  return (
    <div>
      <div className="p-10">
        <h1>Tasks List</h1>
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
          {tasks.map((task) => (
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
