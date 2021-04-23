import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";

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
