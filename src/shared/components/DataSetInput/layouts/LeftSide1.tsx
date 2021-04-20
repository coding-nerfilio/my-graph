import EditableText from "../../EditableText";
import Input from "../../Input";
import "../../../../assets/sass/dataset-input.scss";

interface ILeftSide1Props {
	data: { label: string; raw: any; color: string };
	handleOnChangeLabel: (data: string) => void;
	handleOnChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DataSetInputLeftSide1 = (props: ILeftSide1Props) => {
	return (
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
	);
};
