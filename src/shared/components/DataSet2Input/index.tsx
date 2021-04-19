import { DataSet2 } from "../../../types/store";
import Actions, { Action } from "../../store/actions";
import Button from "../Button";
import EditableText from "../EditableText";
import Input from "../Input";
import "./style.scss";

interface props {
	data: DataSet2;
	index: number;
	dispatcher: (action: Action) => {};
}

const DataSet2Input = (props: props) => {
	const handleChangeLabel = (data: string) => {
		props.dispatcher(Actions.dataSet2.setLabel(props.index, data));
	};

	const handleOnChangeInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: "VALUE" | "COLOR"
	) => {
		switch (type) {
			case "COLOR":
				props.dispatcher(
					Actions.dataSet2.setColor(props.index, e.target.value)
				);
				break;
			case "VALUE":
				props.dispatcher(
					Actions.dataSet2.setValue(props.index, Number(e.target.value))
				);
		}
	};

	const handleDeleteDataset = () => {
		props.dispatcher(Actions.dataSet2.remove(props.index));
	};

	return (
		<div>
			<EditableText value={props.data.label} onChange={handleChangeLabel} />
			<Input
				value={String(props.data.value)}
				onChange={(e) => handleOnChangeInput(e, "VALUE")}
			/>
			<Input
				value={props.data.color}
				onChange={(e) => handleOnChangeInput(e, "COLOR")}
			/>
			<Button onClick={handleDeleteDataset}>Del</Button>
		</div>
	);
};

export default DataSet2Input;
