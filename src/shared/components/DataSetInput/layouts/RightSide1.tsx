import Button from "../../Button";
import ColorPicker from "../../ColorPicker";
import Icon from "../../Icon";
import "../../../../assets/sass/dataset-input.scss";

interface IRightSideProps {
	handleOnChangeColor: (color: string) => void;
	handleOnDeleteDataset: () => void;
	data: { color: string };
}

export const DataSetInputRightSide = (props: IRightSideProps) => {
	return (
		<div className="dataset-input-inner-right">
			<ColorPicker
				value={props.data.color}
				handleOnChangeColor={props.handleOnChangeColor}
			/>
			<Button onClick={props.handleOnDeleteDataset}>
				<Icon name="Delete" />
			</Button>
		</div>
	);
};
