import styled from "styled-components";
import Card from "../General/Card";
import TodoTitle from "./TodoTitle";
import ColorTag from "./ColorTag";

const TodoItemCard = styled(Card)`
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
`;

const TodoItem = (props) => {
	return (
		<TodoItemCard as="li" id={`${props.id}`} onClick={props.onClickHandler}>
			<TodoTitle completed={props.completed}>{props.todoTitle}</TodoTitle>
			<ColorTag colorTag={!props.completed ? props.colorTag : ""} />
		</TodoItemCard>
	);
}

export default TodoItem;