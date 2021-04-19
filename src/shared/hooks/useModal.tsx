import { useEffect, useState } from "react";
import Modal from "../components/Modal/index";

const useModal = (content: JSX.Element, title: string) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const [modal, setModal] = useState(
		ModalWrapper(content, isOpen, closeModal, title)
	);

	useEffect(() => {
		setModal(ModalWrapper(content, isOpen, closeModal, title));
	}, [content, isOpen, title]);

	return { isOpen, openModal, closeModal, Modal: modal };
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
