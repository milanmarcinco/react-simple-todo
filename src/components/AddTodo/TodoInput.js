import styled from "styled-components";

const StyledTodoInput = styled.input`
	width: 100%;
	padding: 0.2rem 1rem 0.2rem .5rem;

	color: #4f4f4f;
	font-family: inherit;
	font-size: inherit;
	border: 0;

	cursor: default;

	&:focus {
		outline: 0;
	}

	&::placeholder {
		color: #c7c7c7;
	}
`;

const TodoInput = (props) => {
	return (
		<StyledTodoInput
			onChange={props.onChange}
			value={props.value}
			ref={props.inputRef}
			type="text"
			placeholder="Add item"
		/>
	);
};

export default TodoInput;
