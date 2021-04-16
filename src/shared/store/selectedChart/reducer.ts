import { State } from "../../../types/store";
import { Action, EAction } from "../actions";

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.SELECTEDCHART_SET:
			return {
				...state,
				selectedChart: action.payload,
			};
		default:
			return state;
	}
};

export default Reducer;
