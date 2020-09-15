import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
	const [singleTodo, setSingleTodo] = useState({});
	const [todos, setTodos] = useState([
		{ label: "make bed" },
		{ label: "brush teeth" },
		{ label: "walk doggo" }
	]);
	const handleChange = e => {
		setSingleTodo({ label: e.target.value });
	};
	const handleClick = e => {
		setTodos([...todos, singleTodo]);
	};
	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					name="todo"
					onChange={handleChange}
					value={singleTodo.label}
				/>
				<button onClick={handleClick}>Save</button>
			</form>
			{todos.map((value, index) => (
				<Todo
					todo={value.label}
					key={index}
					index={index}
					deleteTodo={deleteTodo}
				/>
			))}
			<div className="remaining-todos">{todos.length} items left</div>
		</>
	);
};

export default TodoList;

//other ways to do line 15
//   setTodos(todos.concat(singleTodo))

//         let newTodos = []
//         for (let i = 0; i<todos.length; i++){
//             newTodos.push(todos[i])
//         }
//         newTodos.push(singleTodo)
//         setTodos(newTodos);
