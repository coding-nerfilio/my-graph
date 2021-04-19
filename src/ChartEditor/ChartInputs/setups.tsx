import { useContext } from "react";
import Button from "../../shared/components/Button";
import DataSet1Input from "../../shared/components/DataSetInput/DataSet1";
import DataSet2Input from "../../shared/components/DataSetInput/DataSet2";
import { Context } from "../../shared/store";

import Actions, { Action } from "../../shared/store/actions";
import { State } from "../../types/store";

export const PlotInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<>
			<Button onClick={() => dispatcher(Actions.dataSet1.add())}>
				Add dataset
			</Button>
			{state.dataSet1.map((dataset, index) => (
				<DataSet1Input data={dataset} dispatcher={dispatcher} index={index} />
			))}
		</>
	);
};

export const BarPieInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<>
			<Button onClick={() => dispatcher(Actions.dataSet2.add())}>
				Add dataset
			</Button>
			{state.dataSet2.map((dataset, index) => (
				<DataSet2Input data={dataset} index={index} dispatcher={dispatcher} />
			))}
		</>
	);
};
