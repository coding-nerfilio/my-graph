import Button from "../Button";
import "./style.scss";

const Modal = (props: {
	children: JSX.Element;
	onClose: any;
	title: string;
}) => {
	return (
		<div className="modal-wrapper">
			<div className="modal-interior">
				<div className="modal-content">
					<div className="modal-content-header">
						<div>{props.title}</div>
						<Button onClick={props.onClose}>X</Button>
					</div>

					{props.children}
				</div>
			</div>
		</div>
	);
};
export default Modal;
