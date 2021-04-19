import React from "react";
import { DataSet1 } from "../../../types/store";
import Actions, { Action } from "../../store/actions";
import Button from "../Button";
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

	const handleOnChangeInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: "RAW" | "COLOR"
	) => {
		switch (type) {
			case "COLOR":
				props.dispatcher(
					Actions.dataSet1.setColor(props.index, e.target.value)
				);
				break;
			case "RAW":
				props.dispatcher(Actions.dataSet1.setRaw(props.index, e.target.value));
		}
	};

	const handleDeleteDataset = () => {
		props.dispatcher(Actions.dataSet1.remove(props.index));
	};

	return (
		<div>
			<EditableText value={props.data.label} onChange={handleChangeLabel} />
			<Input
				value={props.data.raw}
				onChange={(e) => handleOnChangeInput(e, "RAW")}
			/>
			<Input
				value={props.data.color}
				onChange={(e) => handleOnChangeInput(e, "COLOR")}
			/>
			<Button onClick={handleDeleteDataset}>Del</Button>
		</div>
	);
};
export default DataSet1Input;
