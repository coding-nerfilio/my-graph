import { DataSet1 } from "../../../types/store";
import Actions, { Action } from "../../store/actions";
import { DataSetInputLeftSide1 } from "./layouts/LeftSide1";
import { DataSetInputRightSide } from "./layouts/RightSide1";
import Container from "./layouts/Container";

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
export default DataSet1Input;
