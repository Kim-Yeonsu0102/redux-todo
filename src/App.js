/*eslint-disable*/
import "./App.css";
import Headers from "./components/Headers";
import TodoBody from "./components/TodoBody";

function App() {
	return (
		<div className="App">
			<h1> MY Todo List</h1>
			<Headers />
			<TodoBody />
		</div>
	);
}

export default App;
