import React from "react";
import { ColorResult, SketchPicker } from "react-color";
import useModal from "../../hooks/useModal";
import Button from "../Button";

interface props {
	value: string;
	handleOnChangeColor: (color: string) => void;
}

const ColorPicker = (props: props) => {
	const handleOnChange = (
		color: ColorResult,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		props.handleOnChangeColor(color.hex);
	};

	const { openModal, Modal } = useModal(
		<SketchPicker color={props.value} onChange={handleOnChange} />,
		"Color picker"
	);

	return (
		<>
			<Button onClick={openModal}>
				<div
					style={{
						width: 16,
						height: 16,
						backgroundColor: props.value,
					}}
				/>
			</Button>
			{Modal}
		</>
	);
};

export default ColorPicker;
