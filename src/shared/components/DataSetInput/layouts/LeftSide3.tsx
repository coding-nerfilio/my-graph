import Input from "../../Input";
import "../../../../assets/sass/dataset-input.scss";
import React from "react";

interface ILeftSide3Props {
	data: string;
	handleOnChangeLabel: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DataSetInputLeftSide3 = (props: ILeftSide3Props) => {
	return (
		<div className="dataset-input-inner-left">
			<Input value={props.data} onChange={props.handleOnChangeLabel} />
		</div>
	);
};
