import { useContext } from "react";
import { Context } from "../../shared/store";
import Actions from "../../shared/store/actions";
import { Action } from "../../types/store/actions";
import { State } from "../../types/store/state";

import "./style.scss";

const ChartSelector = (props: {
	icon: JSX.Element;
	name: string;
	index: number;
}) => {
	const [state, dispatch] = useContext<[State, (action: Action) => State]>(
		Context
	);

	return (
		<div
			onClick={() => {
				dispatch(Actions.selectedChart.set(props.index));
			}}
			className={
				state.selectedChart === props.index
					? "chart-selector chart-selector-selected"
					: "chart-selector"
			}
		>
			<div className="chart-selector-icon">{props.icon}</div>
		</div>
	);
};

export default ChartSelector;
