import { State } from "../../../types/store";
import { Action, EAction } from "../actions";

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.CHARTDATA_SETX:
			return { ...state, chartData: { ...state.chartData, x: action.payload } };
		case EAction.CHARTDATA_SETY:
			return { ...state, chartData: { ...state.chartData, y: action.payload } };
		case EAction.CHARTDATA_SETZ:
			return { ...state, chartData: { ...state.chartData, z: action.payload } };
		case EAction.CHARTDATA_CLEAR:
			return { ...state, chartData: { x: [], y: [], z: [] } };

		default:
			return state;
	}
};

export default Reducer;
