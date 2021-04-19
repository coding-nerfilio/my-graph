import { defaultData, State } from "../../../types/store";
import { Action, EAction } from "../actions";

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.SELECTEDCHART_SET:
			return {
				...state,
				selectedChart: action.payload,
				dataSet1: defaultData.dataSet1,
				dataSet2: defaultData.dataSet2,
				dataSet3: defaultData.dataSet3,
			};
		default:
			return state;
	}
};

export default Reducer;
