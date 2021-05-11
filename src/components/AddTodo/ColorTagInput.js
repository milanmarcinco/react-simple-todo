import styled from "styled-components";

const Label = styled.label`
	position: relative;
`;

const HiddenRadio = styled.input`
	width: 14px;
	height: 14px;
	margin: 0;
	padding: 0;
	border: 0;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
`;

const StyledRadio = styled.div`
	width: 14px;
	height: 14px;
	border-radius: 7px;

	background-color: ${(props) => props.bgColor};

	.radio-btn:checked + & {
		box-shadow: 0px 0px 0px 3px #ececec;
	}
`;

const ColorTagInput = (props) => {
	return (
		<Label>
			<HiddenRadio
				className="radio-btn"
				type="radio"
				name="color-tag"
				value={props.color}
			/>
			<StyledRadio bgColor={props.color} />
		</Label>
	);
};

export default ColorTagInput;
