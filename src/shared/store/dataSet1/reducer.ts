import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";
import { sanitizeText, textToNumberArray } from "../../utils/convertions";
import { newLabel } from "../../utils/dataGeneration/newLabel";
import { randomColor } from "../../utils/dataGeneration/randomColor";

const Reducer = (state: State, action: Action): State => {
	let clone = [...state.dataSet1];
	switch (action.type) {
		case EAction.DATASET1_CLEAR:
			return {
				...state,
				dataSet1: [],
			};
		case EAction.DATASET1_ADD:
			return {
				...state,
				dataSet1: [
					...state.dataSet1,
					{
						label: newLabel(state.dataSet1.length),
						raw: "",
						array: [],
						color: randomColor(),
					},
				],
			};
		case EAction.DATASET1_REMOVE:
			return {
				...state,
				dataSet1: state.dataSet1
					.slice(0, action.payload)
					.concat(...state.dataSet1.slice(action.payload + 1)),
			};
		case EAction.DATASET1_SET_LABEL:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				label: action.payload.data,
			};
			return { ...state, dataSet1: clone };
		case EAction.DATASET1_SET_RAW:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				raw: sanitizeText(action.payload.data),
				array: textToNumberArray(action.payload.data),
			};
			return { ...state, dataSet1: clone };
		case EAction.DATASET1_SET_COLOR:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				color: action.payload.data,
			};
			return { ...state, dataSet1: clone };
		default:
			return state;
	}
};

export default Reducer;
