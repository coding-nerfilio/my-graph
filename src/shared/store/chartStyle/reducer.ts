import { State } from "../../../types/store";
import { Action, EAction } from "../actions";

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.CHARTSTYLE_SET:
			return {
				...state,
				chartStyle: action.payload,
			};
		default:
			return state;
	}
};

export default Reducer;
