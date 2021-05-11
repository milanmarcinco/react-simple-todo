import styled from "styled-components";

const StyledButton = styled.button`
	padding: 0.2rem 1rem;
	color: #4f4f4f;
	font-family: inherit;
	font-size: inherit;
	background-color: #ebebeb;
	border: 0;
	border-radius: 6px;

	&:hover {
		background-color: #d9d9d9;
	}

	&:active {
		background-color: #c9c9c9;
	}
`;

const Button = (props) => {
	return (
		<StyledButton type={props.type || "button"} onClick={props.onClick}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
