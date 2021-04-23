import { DataSet3 } from "../../../types/dataset";
import { Action } from "../../../types/store/actions";
import Actions from "../../store/actions";
import Container from "./layouts/Container";
import { DataSetInputLeftSide1 } from "./layouts/LeftSide1";
import { DataSetInputRightSide } from "./layouts/RightSide1";

interface props {
	data: DataSet3;
	dispatcher: (action: Action) => {};
}

const DataSet3Input = (props: props) => {
	const handleOnChangeLabel = (data: string) => {
		props.dispatcher(Actions.dataSet3.setLabel(data));
	};

	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.dispatcher(Actions.dataSet3.setRaw(e.target.value));
	};

	const handleOnChangeColor = (color: string) => {
		props.dispatcher(Actions.dataSet3.setColor(color));
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
			/>
		</Container>
	);
};
export default DataSet3Input;
