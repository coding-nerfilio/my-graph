import { State } from "../../../types/store";
import { sanitizeText, textToArray } from "../../utils/convertions";
import { randomColor } from "../../utils/randomColor";
import { Action, EAction } from "../actions";

//TODO RANDOM COLOR

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.DATASET3_CLEAR:
			return {
				...state,
				dataSet3: {
					label: "X",
					raw: "",
					array: [],
					color: randomColor(),
				},
			};
		case EAction.DATASET3_SET_LABEL:
			return {
				...state,
				dataSet3: {
					...state.dataSet3,
					label: action.payload,
				},
			};
		case EAction.DATASET3_SET_RAW:
			return {
				...state,
				dataSet3: {
					...state.dataSet3,
					raw: sanitizeText(action.payload),
					array: textToArray(action.payload),
				},
			};
		case EAction.DATASET3_SET_COLOR:
			return {
				...state,
				dataSet3: {
					...state.dataSet3,
					color: action.payload,
				},
			};
		default:
			return state;
	}
};

export default Reducer;
