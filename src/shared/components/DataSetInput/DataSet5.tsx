import React from "react";
import { DataSet3 } from "../../../types/dataset";
import { Action } from "../../../types/store/actions";
import Actions from "../../store/actions";
import Container from "./layouts/Container";
import { DataSetInputLeftSide1 } from "./layouts/LeftSide1";
import { DataSetInputRightSide } from "./layouts/RightSide1";

interface props {
	data: DataSet3;
	index: number;
	dispatcher: (action: Action) => {};
}

const DataSet5Input = (props: props) => {
	const handleOnChangeLabel = (data: string) => {
		props.dispatcher(Actions.dataSet5.setTitle(props.index, data));
	};

	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.dispatcher(Actions.dataSet5.setRaw(props.index, e.target.value));
	};

	const handleOnChangeColor = (color: string) => {
		props.dispatcher(Actions.dataSet5.setColor(props.index, color));
	};

	const handleOnDeleteDataset = () => {
		props.dispatcher(Actions.dataSet5.remove(props.index));
	};

	return (
		<Container>
			<DataSetInputLeftSide1
				data={props.data}
				handleOnChangeInput={handleOnChangeInput}
				handleOnChangeLabel={handleOnChangeLabel}
			/>
			<DataSetInputRightSide
				data={props.data}
				handleOnChangeColor={handleOnChangeColor}
				handleOnDeleteDataset={handleOnDeleteDataset}
			/>
		</Container>
	);
};

export default DataSet5Input;
