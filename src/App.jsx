import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state) => state.tasks.list);

  return (
    <h1>
      <div className="p-10">
        <ul className="flex flex-col border rounded p-5">
          {tasks.map((task) => (
            <ls key={task.id} className="m-1 border rounded-md p-2">
              <input type="checkbox" value={task.completed} />
              <label className="m-3">{task.text}</label>
              <button className="border p-1 rounded">Remove</button>
            </ls>
          ))}
        </ul>
      </div>
    </h1>
  );
}

export default App;
