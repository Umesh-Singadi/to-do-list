import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state) => state.tasks.list);

  return <h1>App</h1>;
}

export default App;
