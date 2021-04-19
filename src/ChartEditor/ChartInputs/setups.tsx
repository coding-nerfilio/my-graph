import Button from "../../shared/components/Button";
import DataSet1Input from "../../shared/components/DataSet1Input";
import DataSet2Input from "../../shared/components/DataSet2Input";

import Actions, { Action } from "../../shared/store/actions";
import { State } from "../../types/store";

interface props {
	state: State;
	dispatcher: (action: Action) => {};
}

export const PlotInputs = (props: props) => {
	return (
		<>
			<Button onClick={() => props.dispatcher(Actions.dataSet1.add())}>
				Add
			</Button>
			{props.state.dataSet1.map((dataset, index) => (
				<DataSet1Input
					data={dataset}
					dispatcher={props.dispatcher}
					index={index}
				/>
			))}
		</>
	);
};

export const BarPieInputs = (props: props) => {
	return (
		<>
			<Button onClick={() => props.dispatcher(Actions.dataSet2.add())}>
				Add
			</Button>
			{props.state.dataSet2.map((dataset, index) => (
				<DataSet2Input
					data={dataset}
					index={index}
					dispatcher={props.dispatcher}
				/>
			))}
		</>
	);
};
