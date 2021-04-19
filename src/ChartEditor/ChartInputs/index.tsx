import { useContext } from "react";

import { Context } from "../../shared/store";
import { Action } from "../../shared/store/actions";
import { State } from "../../types/store";
import { BarPieInputs, PlotInputs } from "./setups";
import "./style.scss";

const ChartInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<div className="chart-inputs">
			{state.selectedChart === 0 && (
				<PlotInputs state={state} dispatcher={dispatcher} />
			)}
			{state.selectedChart === 2 && (
				<BarPieInputs state={state} dispatcher={dispatcher} />
			)}
			{state.selectedChart === 3 && (
				<BarPieInputs state={state} dispatcher={dispatcher} />
			)}
		</div>
	);
};

export default ChartInputs;
