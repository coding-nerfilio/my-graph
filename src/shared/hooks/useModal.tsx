import { useState } from "react";
import Modal from "../components/Modal/index";

const useModal = (content: JSX.Element, title: string) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return {
		isOpen,
		openModal,
		closeModal,
		Modal: ModalWrapper(content, isOpen, closeModal, title),
	};
};

export default useModal;

const ModalWrapper = (
	content: JSX.Element,
	isOpen: boolean,
	onClose: any,
	title: string
) =>
	isOpen ? (
		<Modal title={title} onClose={onClose}>
			{content}
		</Modal>
	) : (
		<></>
	);
