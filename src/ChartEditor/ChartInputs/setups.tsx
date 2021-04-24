import { useContext } from "react";
import Button from "../../shared/components/Button";
import DataSet1Input from "../../shared/components/DataSetInput/DataSet1";
import DataSet2Input from "../../shared/components/DataSetInput/DataSet2";
import DataSet3Input from "../../shared/components/DataSetInput/DataSet3";
import DataSet4Input from "../../shared/components/DataSetInput/DataSet4";
import DataSet5Input from "../../shared/components/DataSetInput/DataSet5";
import DataSet5TitleInput from "../../shared/components/DataSetInput/DataSet5Title";
import { Context } from "../../shared/store";
import Actions from "../../shared/store/actions";
import { Action } from "../../types/store/actions";
import { State } from "../../types/store/state";

export const PlotInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<>
			<div style={{ marginTop: 5, marginBottom: 5 }}>Datasets:</div>
			<Button onClick={() => dispatcher(Actions.dataSet1.add())}>
				Add dataset
			</Button>
			{state.dataSet1.map((dataset, index) => (
				<DataSet1Input data={dataset} dispatcher={dispatcher} index={index} />
			))}
		</>
	);
};

export const ScatterInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<>
			<div style={{ marginTop: 5, marginBottom: 5 }}>Datasets:</div>
			<Button onClick={() => dispatcher(Actions.dataSet4.add())}>
				Add dataset
			</Button>
			{state.dataSet4.map((dataset, index) => (
				<DataSet4Input data={dataset} dispatcher={dispatcher} index={index} />
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
			<div style={{ marginTop: 5, marginBottom: 5 }}>Datasets:</div>
			<Button onClick={() => dispatcher(Actions.dataSet2.add())}>
				Add dataset
			</Button>
			{state.dataSet2.map((dataset, index) => (
				<DataSet2Input data={dataset} index={index} dispatcher={dispatcher} />
			))}
		</>
	);
};

export const HistogramInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<>
			<div style={{ marginTop: 5, marginBottom: 5 }}>Data:</div>
			<DataSet3Input dispatcher={dispatcher} data={state.dataSet3} />
		</>
	);
};

export const RadarInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<>
			<div style={{ marginTop: 5, marginBottom: 5 }}>Labels:</div>
			<DataSet5TitleInput
				data={state.dataSet5.labels}
				dispatcher={dispatcher}
			/>
			<div style={{ marginTop: 30, marginBottom: 5 }}>Datasets:</div>
			<Button onClick={() => dispatcher(Actions.dataSet5.add())}>
				Add dataset
			</Button>

			{state.dataSet5.datasets.map((dataset, index) => (
				<DataSet5Input data={dataset} dispatcher={dispatcher} index={index} />
			))}
		</>
	);
};
