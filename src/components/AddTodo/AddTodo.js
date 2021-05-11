import React, {useState, useEffect, useReducer, useRef } from "react";
import styled from "styled-components";

import Card from "../General/Card";
import TodoInput from "./TodoInput";
import ColorTagInput from "./ColorTagInput";
import Button from "../General/Button";

import ModalWindow from '../General/ModalWindow';

const Form = styled.form`
	display: flex;
	align-items: stretch;
`;

const ControlsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const ColorTagsWrapper = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 6px;
`;

const initialState = {
	nameValue: "",
	nameValid: false,
	colorTagValue: "",
	colorTagValid: false
}

const todoReducer = (state, action) => {
	switch(action.type) {
		case "UPDATE-NAME":
			return {
				...state,
				nameValue: action.val,
				nameValid: action.val !== ""
			};
		case "UPDATE-COLORTAG":
			return {
				...state,
				colorTagValue: action.val,
				colorTagValid: action.val !== ""
			}
		default:
			throw new Error();
	}
}

const AddTodo = (props) => {
	const [todoState, dispatchNewTodo] = useReducer(todoReducer, initialState);

	const [errorMessage, setErrorMessage] = useState("");
	const [modalShown, setModalShown] = useState(false);

	const todoInputRef = useRef();

	// Set error message when one of the inputs is invalid.
	useEffect(() => {
		if (!todoState.nameValid) return setErrorMessage("Todo title empty!");
		if (!todoState.colorTagValid) return setErrorMessage("Please, choose a color tag!");
		return setErrorMessage("An error occurred.")
	}, [todoState.nameValid, todoState.colorTagValid])

	const onAddTodo = (e) => {
		e.preventDefault();
		if (!todoState.nameValid || !todoState.colorTagValid) return setModalShown(true);
		props.onAddTodo(todoState.nameValue.trim(), todoState.colorTagValue);
		dispatchNewTodo({type: "UPDATE-NAME", val: ""});
		todoInputRef.current.focus();
	};

	const onTodoTitleChange = (e) => {
		dispatchNewTodo({type: "UPDATE-NAME", val: e.target.value});
	};

	const onColorTagChange = (e) => {
		dispatchNewTodo({type: "UPDATE-COLORTAG", val: e.target.value});
	};

	const onCloseModal = () => {
		setModalShown(false);
	}

	// prettier-ignore
	const colorTagOptions = ["#F28585", "#FFBA69", "#7FE78F", "#6AD0F0", "#C085FB"];

	return (
		<Card>
			<Form onSubmit={onAddTodo}>
				<TodoInput
					onChange={onTodoTitleChange}
					value={todoState.nameValue}
					inputRef={todoInputRef}
				/>
				<ControlsWrapper>
					<ColorTagsWrapper onChange={onColorTagChange}>
						{colorTagOptions.map((color) => (
							<ColorTagInput color={color} />
						))}
					</ColorTagsWrapper>
					<Button type="submit">Add</Button>
				</ControlsWrapper>
			</Form>
			{modalShown && <ModalWindow onClickHandler={onCloseModal} message={errorMessage} />}
		</Card>
	);
};

export default AddTodo;
