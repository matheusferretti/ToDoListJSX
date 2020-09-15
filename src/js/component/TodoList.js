import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
    const [singleTodo, setsingleTodo] = useState({})
	const [todos, setTodos] = useState([
		{ label: "make bed" },
		{ label: "brush teeth" },
		{ label: "walk doggo" }
	]);
	const handleChange = e => {
        setSingleTodo({[

        ]})
    }
	// const handleClick = e => {
    //     if(Object.keys(singleTodo).length === 0 || singleTtodo.todo.trim() === "")
    // }
	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input type="text" name="todo" onChange={handleChange}>
					<button onClick={handleClick}>Save</button>
				</input>
			</form>
			{todos.map((value, index) => (
				<Todo todo={value.todo} />
			))}
		</>
	);
};

export default TodoList;
