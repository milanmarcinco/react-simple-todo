import styled from 'styled-components';

const TodoTitle = styled.p`
	margin: 0;
	padding: 0.2rem 0;
	color: ${props => props.completed ? "#c7c7c7" : "#4F4F4F"};
	font-size: inherit;
	font-family: inherit;
	text-decoration: ${props => props.completed ? "line-through" : "none"};
	cursor: default;
	pointer-events: none;
`;

export default TodoTitle;