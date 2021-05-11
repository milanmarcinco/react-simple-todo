import styled from "styled-components";
import TodoItem from "./TodoItem";

const Ul = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const TodosList = (props) => {
	
	// onComplete handler
	const onComplete = (e) => {
		props.onCompleteTodo(e.target.id);
	};

	// onDelete handler
	const onDelete = (e) => {
		props.onDeleteTodo(e.target.id);
	};

	// Filter incomplete todos
	const incompleteTodos = props.todos
		.filter((todo) => {
			return !todo.completed;
		}) // Create array
		.map((todo) => {
			return (
				<TodoItem
					key={todo.id}
					todoTitle={todo.todoTitle}
					colorTag={todo.colorTag}
					completed={todo.completed}
					id={todo.id}
					onClickHandler={onComplete}
				/>
			);
		});

	// Filter completed todos
	const completedTodos = props.todos
		.filter((todo) => {
			return todo.completed;
		}) // Create array
		.map((todo) => {
			return (
				<TodoItem
					key={todo.id}
					todoTitle={todo.todoTitle}
					colorTag={todo.colorTag}
					completed={todo.completed}
					id={todo.id}
					onClickHandler={onDelete}
				/>
			);
		});

	return (
		<>
			{incompleteTodos.length !== 0 ? <Ul>{incompleteTodos}</Ul> : null}
			{completedTodos.length !== 0 ? <Ul>{completedTodos}</Ul> : null}
		</>
	);
};

export default TodosList;
