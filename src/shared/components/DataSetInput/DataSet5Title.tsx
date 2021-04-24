import { Action } from "../../../types/store/actions";
import Actions from "../../store/actions";
import Container from "./layouts/Container";
import { DataSetInputLeftSide3 } from "./layouts/LeftSide3";
import { DataSetInputRightSide2 } from "./layouts/RightSide2";

interface props {
	data: string;
	dispatcher: (action: Action) => {};
}

const DataSet5TitleInput = (props: props) => {
	const handleOnChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.dispatcher(Actions.dataSet5.setLabel(e.target.value));
	};
	return (
		<Container>
			<DataSetInputLeftSide3
				data={props.data}
				handleOnChangeLabel={handleOnChangeLabel}
			/>
			<DataSetInputRightSide2 />
		</Container>
	);
};
export default DataSet5TitleInput;
