import styled from "styled-components";

const ColorTag = styled.div`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	pointer-events: none;

	background-color: ${(props) => props.colorTag || "#ebebeb"};
`;

export default ColorTag;
