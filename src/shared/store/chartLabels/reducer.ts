import { State } from "../../../types/store";
import { Action, EAction } from "../actions";

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.CHARLABEL_CLEAR:
			return { ...state, chartLabels: { x: "", y: "" } };
		case EAction.CHARTLABEL_SETX:
			return {
				...state,
				chartLabels: { ...state.chartLabels, x: action.payload as any },
			};
		case EAction.CHARTLABEL_SETY:
			return {
				...state,
				chartLabels: { ...state.chartLabels, y: action.payload as any },
			};
		default:
			return state;
	}
};

export default Reducer;
