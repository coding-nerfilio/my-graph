import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";
import { sanitizeText, textToArray } from "../../utils/convertions";
import { newLabel } from "../../utils/dataGeneration/newLabel";
import { randomColor } from "../../utils/dataGeneration/randomColor";

const Reducer = (state: State, action: Action): State => {
	let clone = [...state.dataSet4];
	switch (action.type) {
		case EAction.DATASET4_CLEAR:
			return {
				...state,
				dataSet4: [],
			};
		case EAction.DATASET4_ADD:
			return {
				...state,
				dataSet4: [
					...state.dataSet4,
					{
						label: newLabel(state.dataSet4.length),
						rawX: "",
						rawY: "",
						arrayX: [],
						arrayY: [],
						color: randomColor(),
					},
				],
			};
		case EAction.DATASET4_REMOVE:
			return {
				...state,
				dataSet4: state.dataSet4
					.slice(0, action.payload)
					.concat(...state.dataSet4.slice(action.payload + 1)),
			};
		case EAction.DATASET4_SET_LABEL:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				label: action.payload.data,
			};
			return { ...state, dataSet4: clone };
		case EAction.DATASET4_SET_RAWX:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				rawX: sanitizeText(action.payload.data),
				arrayX: textToArray(action.payload.data),
			};
			return { ...state, dataSet4: clone };
		case EAction.DATASET4_SET_RAWY:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				rawY: sanitizeText(action.payload.data),
				arrayY: textToArray(action.payload.data),
			};
			return { ...state, dataSet4: clone };
		case EAction.DATASET4_SET_COLOR:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				color: action.payload.data,
			};
			return { ...state, dataSet4: clone };
		default:
			return state;
	}
};

export default Reducer;
