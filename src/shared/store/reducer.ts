import { State } from "../../types/store";
import { Action, EAction } from "./actions";

import selectedChart from "./selectedChart/reducer";
import chartStyle from "./chartStyle/reducer";
import chartLabels from "./chartLabels/reducer";
import chartData from "./chartData/reducer";

const RootReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.SELECTEDCHART_SET:
			return selectedChart(state, action);

		case EAction.CHARTSTYLE_SET:
			return chartStyle(state, action);

		case EAction.CHARTLABEL_SETX:
		case EAction.CHARTLABEL_SETY:
		case EAction.CHARLABEL_CLEAR:
			return chartLabels(state, action);

		case EAction.CHARTDATA_CLEAR:
		case EAction.CHARTDATA_SETX:
		case EAction.CHARTDATA_SETY:
		case EAction.CHARTDATA_SETZ:
			return chartData(state, action);

		default:
			return state;
	}
};

export default RootReducer;
