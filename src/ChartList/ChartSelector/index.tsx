import { useContext } from "react";
import { Context } from "../../shared/store";
import Actions, { Action } from "../../shared/store/actions";
import { State } from "../../types/store";
import "./style.scss";

const ChartSelector = (props: {
	icon: string;
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
			<div className="chart-selector-name">{props.name}</div>
		</div>
	);
};

export default ChartSelector;
