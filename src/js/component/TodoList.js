import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ todo: "todo1" },
		{ todo: "todo2" },
		{ todo: "todo3" }
	]);
	// const handleChange =
	const handleClick = e => console.log("click");
	return (
		<>
			{todos.map((value, index) => (
				<Todo todo={value.todo} />
			))}
		</>
	);
};

export default TodoList;
