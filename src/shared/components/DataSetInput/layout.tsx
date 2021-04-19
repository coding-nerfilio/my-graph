import Button from "../Button";
import ColorPicker from "../ColorPicker";
import EditableText from "../EditableText";
import Icon from "../Icon";
import Input from "../Input";
import "../../../assets/sass/dataset-input.scss";

interface props {
	data: { label: string; raw: any; color: string };
	handleOnChangeLabel: (data: string) => void;
	handleOnChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnChangeColor: (color: string) => void;
	handleOnDeleteDataset: () => void;
}

const DataSetInput = (props: props) => {
	return (
		<div className="dataset-input">
			<div className="dataset-input-inner-left">
				<EditableText
					value={props.data.label}
					onChange={props.handleOnChangeLabel}
				/>
				<Input
					value={props.data.raw}
					onChange={props.handleOnChangeInput}
					placeholder="value1, value2, value3 ..."
				/>
			</div>
			<div className="dataset-input-inner-right">
				<ColorPicker
					value={props.data.color}
					handleOnChangeColor={props.handleOnChangeColor}
				/>
				<Button onClick={props.handleOnDeleteDataset}>
					<Icon name="Delete" />
				</Button>
			</div>
		</div>
	);
};

export default DataSetInput;
