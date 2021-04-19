import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./style.scss";
interface props {
	value: string;
	onChange: (data: string) => void;
}

const EditableText = (props: props) => {
	const [editing, setEditing] = useState(false);
	const [tempText, setTempText] = useState(props.value);

	useEffect(() => {
		setTempText(props.value);
	}, [props.value, editing]);

	const handleChangeTempText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTempText(e.target.value);
	};

	const handleConfirmChanges = () => {
		props.onChange(tempText);
		setEditing(false);
	};

	const handleSwitchEditingMode = () => {
		setEditing(!editing);
	};

	return editing ? (
		<div className="editable-text-editing">
			<Input value={tempText} onChange={handleChangeTempText} />
			<Button onClick={handleConfirmChanges}>Y</Button>
			<Button onClick={handleSwitchEditingMode}>N</Button>
		</div>
	) : (
		<div className="editable-text-idle">
			<div>{props.value}</div>
			<Button onClick={handleSwitchEditingMode}>E</Button>
		</div>
	);
};

export default EditableText;
