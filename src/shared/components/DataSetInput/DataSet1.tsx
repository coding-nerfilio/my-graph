import React from "react";
import { DataSet1 } from "../../../types/store";
import Actions, { Action } from "../../store/actions";
import DataSetInput from "./layout";

interface props {
	data: DataSet1;
	index: number;
	dispatcher: (action: Action) => {};
}

const DataSet1Input = (props: props) => {
	const handleOnChangeLabel = (data: string) => {
		props.dispatcher(Actions.dataSet1.setLabel(props.index, data));
	};

	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.dispatcher(Actions.dataSet1.setRaw(props.index, e.target.value));
	};

	const handleOnChangeColor = (color: string) => {
		props.dispatcher(Actions.dataSet1.setColor(props.index, color));
	};

	const handleOnDeleteDataset = () => {
		props.dispatcher(Actions.dataSet1.remove(props.index));
	};

	return (
		<DataSetInput
			data={props.data}
			handleOnChangeColor={handleOnChangeColor}
			handleOnChangeLabel={handleOnChangeLabel}
			handleOnChangeInput={handleOnChangeInput}
			handleOnDeleteDataset={handleOnDeleteDataset}
		/>
	);
};
export default DataSet1Input;
