import React from "react";
import { DataSet1 } from "../../../types/store";
import Actions, { Action } from "../../store/actions";
import Button from "../Button";
import ColorPicker from "../ColorPicker";
import EditableText from "../EditableText";
import Input from "../Input";
import "./style.scss";

interface props {
	data: DataSet1;
	index: number;
	dispatcher: (action: Action) => {};
}

const DataSet1Input = (props: props) => {
	const handleChangeLabel = (data: string) => {
		props.dispatcher(Actions.dataSet1.setLabel(props.index, data));
	};

	const handleOnChangeRawInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.dispatcher(Actions.dataSet1.setRaw(props.index, e.target.value));
	};

	const handleOnChangeColor = (color: string) => {
		props.dispatcher(Actions.dataSet1.setColor(props.index, color));
	};

	const handleDeleteDataset = () => {
		props.dispatcher(Actions.dataSet1.remove(props.index));
	};

	return (
		<div className="dataset-input-1">
			<EditableText value={props.data.label} onChange={handleChangeLabel} />
			<div>
				<div>Values:</div>
				<Input value={props.data.raw} onChange={handleOnChangeRawInput} />
			</div>
			<ColorPicker
				value={props.data.color}
				handleOnChangeColor={handleOnChangeColor}
			/>
			<Button onClick={handleDeleteDataset}>Delete</Button>
		</div>
	);
};
export default DataSet1Input;
