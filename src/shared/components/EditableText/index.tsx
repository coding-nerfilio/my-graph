import React, { useEffect, useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
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
			<div className="editable-text-editing-left">
				<Input w={"100%"} value={tempText} onChange={handleChangeTempText} />
			</div>
			<div className="editable-text-editing-right">
				<Button onClick={handleConfirmChanges} mr={5}>
					<Icon name="Tick" />
				</Button>
				<Button onClick={handleSwitchEditingMode}>
					<Icon name="Cross" />
				</Button>
			</div>
		</div>
	) : (
		<div className="editable-text-idle">
			<div>{props.value}</div>
			<Button onClick={handleSwitchEditingMode}>
				<Icon name="Edit" />
			</Button>
		</div>
	);
};

export default EditableText;
