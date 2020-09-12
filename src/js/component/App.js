import React from "react";
import TodoList from "./TodoList";

const App = () => {
	return (
		<div className="app">
			<h1>ToDos</h1>
			<div className="app-content">
				<TodoList />
			</div>
		</div>
	);
};

export default App;
