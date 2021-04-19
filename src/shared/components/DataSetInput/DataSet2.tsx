import { DataSet2 } from "../../../types/store";
import Actions, { Action } from "../../store/actions";
import DataSetInput from "./layout";

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
		<DataSetInput
			data={props.data}
			handleOnChangeColor={handleOnChangeColor}
			handleOnChangeLabel={handleOnChangeLabel}
			handleOnChangeInput={handleOnChangeInput}
			handleOnDeleteDataset={handleOnDeleteDataset}
		/>
	);
};

export default DataSet2Input;
