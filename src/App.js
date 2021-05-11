import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/ShowTodos/TodosList";

const Wrapper = styled.div`
	width: 100%;
	max-width: 600px;
	padding: 3rem 1rem;

	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const App = () => {
	const [todos, setTodos] = useState([]);

	// Add todo
	const onAddTodo = (todoTitle, colorTag) => {
		setTodos((prevTodos) => {
			return [
				{
					todoTitle,
					colorTag,
					completed: false,
					id: uuidv4(),
				},
				...prevTodos,
			];
		});
	};

	// Complete todo on click
	const onCompleteTodo = (todoId) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === todoId) {
					todo.completed = !todo.completed;
					return todo;
				}
				return todo;
			});
		});
	};

	// Delete todo on click
	const onDeleteTodo = (todoId) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => {
				return todo.id !== todoId;
			});
		});
	};

	return (
		<Wrapper>
			{/* AddTodo form */}
			<AddTodo onAddTodo={onAddTodo} />

			{/* Show todos */}
			<TodosList
				todos={todos}
				onCompleteTodo={onCompleteTodo}
				onDeleteTodo={onDeleteTodo}
			/>
		</Wrapper>
	);
};

export default App;
