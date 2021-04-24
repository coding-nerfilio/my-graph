import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";
import {
	sanitizeText,
	textToNumberArray,
	textToTextArray,
} from "../../utils/convertions";
import { newLabel } from "../../utils/dataGeneration/newLabel";
import { randomColor } from "../../utils/dataGeneration/randomColor";

const Reducer = (state: State, action: Action): State => {
	let clone = [...state.dataSet5];
	switch (action.type) {
		case EAction.DATASET5_CLEAR:
			return {
				...state,
				dataSet5: [],
			};
		case EAction.DATASET5_ADD:
			return {
				...state,
				dataSet5: [
					...state.dataSet5,
					{
						label: newLabel(state.dataSet5.length),
						rawX: "",
						rawY: "",
						arrayX: [],
						arrayY: [],
						color: randomColor(),
					},
				],
			};
		case EAction.DATASET5_REMOVE:
			return {
				...state,
				dataSet5: state.dataSet5
					.slice(0, action.payload)
					.concat(...state.dataSet5.slice(action.payload + 1)),
			};
		case EAction.DATASET5_SET_LABEL:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				label: action.payload.data,
			};
			return { ...state, dataSet5: clone };
		case EAction.DATASET5_SET_RAWX:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				rawX: sanitizeText(action.payload.data),
				arrayX: textToTextArray(action.payload.data),
			};
			return { ...state, dataSet5: clone };
		case EAction.DATASET5_SET_RAWY:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				rawY: sanitizeText(action.payload.data),
				arrayY: textToNumberArray(action.payload.data),
			};
			return { ...state, dataSet5: clone };
		case EAction.DATASET5_SET_COLOR:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				color: action.payload.data,
			};
			return { ...state, dataSet5: clone };
		default:
			return state;
	}
};

export default Reducer;
