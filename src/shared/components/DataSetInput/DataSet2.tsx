import { DataSet2 } from "../../../types/store";
import Actions, { Action } from "../../store/actions";
import Container from "./layouts/Container";
import { DataSetInputLeftSide1 } from "./layouts/LeftSide1";
import { DataSetInputRightSide } from "./layouts/RightSide1";

interface props {
	data: DataSet2;
	index: number;
	dispatcher: (action: Action) => {};
}

const DataSet2Input = (props: props) => {
	const handleOnChangeLabel = (data: string) => {
		props.dispatcher(Actions.dataSet2.setLabel(props.index, data));
	};

	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.dispatcher(Actions.dataSet2.setValue(props.index, e.target.value));
	};

	const handleOnChangeColor = (color: string) => {
		props.dispatcher(Actions.dataSet2.setColor(props.index, color));
	};

	const handleOnDeleteDataset = () => {
		props.dispatcher(Actions.dataSet2.remove(props.index));
	};

	return (
		<Container>
			<DataSetInputLeftSide1
				data={props.data}
				handleOnChangeLabel={handleOnChangeLabel}
				handleOnChangeInput={handleOnChangeInput}
			/>
			<DataSetInputRightSide
				data={props.data}
				handleOnChangeColor={handleOnChangeColor}
				handleOnDeleteDataset={handleOnDeleteDataset}
			/>
		</Container>
	);
};

export default DataSet2Input;
