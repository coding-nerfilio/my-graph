import { DataSet4 } from "../../../types/dataset";
import { Action } from "../../../types/store/actions";
import Actions from "../../store/actions";
import Container from "./layouts/Container";
import { DataSetInputLeftSide2 } from "./layouts/LeftSide2";
import { DataSetInputRightSide } from "./layouts/RightSide1";

interface props {
	data: DataSet4;
	index: number;
	dispatcher: (action: Action) => {};
}

const DataSet4Input = (props: props) => {
	const handleOnChangeLabel = (data: string) => {
		props.dispatcher(Actions.dataSet4.setLabel(props.index, data));
	};

	const handleOnChangeInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: "RAWX" | "RAWY"
	) => {
		switch (type) {
			case "RAWX":
				props.dispatcher(Actions.dataSet4.setRawX(props.index, e.target.value));
				break;
			case "RAWY":
				props.dispatcher(Actions.dataSet4.setRawY(props.index, e.target.value));
				break;
		}
	};

	const handleOnChangeColor = (color: string) => {
		props.dispatcher(Actions.dataSet4.setColor(props.index, color));
	};

	const handleOnDeleteDataset = () => {
		props.dispatcher(Actions.dataSet4.remove(props.index));
	};

	return (
		<Container>
			<DataSetInputLeftSide2
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
export default DataSet4Input;
