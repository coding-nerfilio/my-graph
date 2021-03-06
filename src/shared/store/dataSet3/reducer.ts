import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";
import { sanitizeText, textToNumberArray } from "../../utils/convertions";
import { randomColor } from "../../utils/dataGeneration/randomColor";

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
					array: textToNumberArray(action.payload),
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
