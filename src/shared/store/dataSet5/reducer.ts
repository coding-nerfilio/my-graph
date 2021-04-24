import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";
import { textToNumberArray } from "../../utils/convertions";
import { randomColor } from "../../utils/dataGeneration/randomColor";

const Reducer = (state: State, action: Action): State => {
	let clone = [...state.dataSet5.datasets];
	switch (action.type) {
		case EAction.DATASET5_CLEAR:
			return {
				...state,
				dataSet5: { ...state.dataSet5, datasets: [] },
			};
		case EAction.DATASET5_ADD:
			return {
				...state,
				dataSet5: {
					...state.dataSet5,
					datasets: [
						...state.dataSet5.datasets,
						{
							color: randomColor(),
							raw: "",
							array: [],
						},
					],
				},
			};
		case EAction.DATASET5_REMOVE:
			return {
				...state,
				dataSet5: {
					...state.dataSet5,
					datasets: state.dataSet5.datasets
						.slice(0, action.payload)
						.concat(...state.dataSet5.datasets.slice(action.payload + 1)),
				},
			};
		case EAction.DATASET5_SET_LABEL:
			return {
				...state,
				dataSet5: {
					...state.dataSet5,
					labels: action.payload,
				},
			};
		case EAction.DATASET5_SET_RAW:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				raw: action.payload.data,
				array: textToNumberArray(action.payload.data),
			};
			return { ...state, dataSet5: { ...state.dataSet5, datasets: clone } };
		case EAction.DATASET5_SET_COLOR:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				color: action.payload.data,
			};
			return { ...state, dataSet5: { ...state.dataSet5, datasets: clone } };
		default:
			return state;
	}
};

export default Reducer;
