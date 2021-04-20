import EditableText from "../../EditableText";
import Input from "../../Input";
import "../../../../assets/sass/dataset-input.scss";

interface ILeftSide2Props {
	data: { label: string; rawX: any; rawY: any; color: string };
	handleOnChangeLabel: (data: string) => void;
	handleOnChangeInput: (
		e: React.ChangeEvent<HTMLInputElement>,
		type: "RAWX" | "RAWY"
	) => void;
}

export const DataSetInputLeftSide2 = (props: ILeftSide2Props) => {
	return (
		<div className="dataset-input-inner-left">
			<EditableText
				value={props.data.label}
				onChange={props.handleOnChangeLabel}
			/>
			<Input
				value={props.data.rawX}
				onChange={(e) => props.handleOnChangeInput(e, "RAWX")}
				placeholder="value1, value2, value3 ..."
			/>
			<Input
				value={props.data.rawY}
				onChange={(e) => props.handleOnChangeInput(e, "RAWY")}
				placeholder="value1, value2, value3 ..."
				mb={10}
			/>
		</div>
	);
};
