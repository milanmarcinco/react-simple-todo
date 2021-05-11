import ReactDOM from "react-dom";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";

const Backdrop = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	background: rgba(0, 0, 0, 0.5);
	overflow: auto;
`;

const Window = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: stretch;

	max-width: 600px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

const P = styled.p`
	color: #4F4F4F;
	text-align: center;
`;

const ModalWindow = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<>
					<Backdrop onClick={props.onClickHandler} />
					<Window>
						<P>{props.message}</P>
						<Button onClick={props.onClickHandler}>Close</Button>
					</Window>
				</>,
				document.getElementById("modal-root")
			)}
		</>
	);
};

export default ModalWindow;
