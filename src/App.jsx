import { useSelector, useDispatch } from "react-redux";
import { toggleTask } from "./store";
function App() {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();
  return (
    <h1>
      <div className="p-10">
        <ul className="flex flex-col border rounded p-5">
          {tasks.map((task) => (
            <li key={task.id} className="m-1 border rounded-md p-2">
              <input
                type="checkbox"
                value={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <label className="m-3">{task.text}</label>
              <button className="border p-1 rounded">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </h1>
  );
}

export default App;
