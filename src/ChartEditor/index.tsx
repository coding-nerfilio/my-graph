import { useContext } from "react";
import { Context } from "../shared/store";
import { Action } from "../shared/store/actions";
import { State } from "../types/store";
import "./style.scss";
const ChartEditor = () => {
	const [state] = useContext<[State, (action: Action) => null]>(Context);
	return (
		<div className="chart-editor">
			Chart Editor
			<br />
			Selected index: {state.selectedChart}
		</div>
	);
};

export default ChartEditor;
