import { State } from "../../../types/store";
import { newLabel } from "../../utils/newLabel";
import { randomColor } from "../../utils/randomColor";
import { Action, EAction } from "../actions";

//TODO RANDOM COLOR

const Reducer = (state: State, action: Action): State => {
	let clone = [...state.dataSet2];
	switch (action.type) {
		case EAction.DATASET2_CLEAR:
			return {
				...state,
				dataSet2: [],
			};
		case EAction.DATASET2_ADD:
			return {
				...state,
				dataSet2: [
					...state.dataSet2,
					{
						label: newLabel(state.dataSet2.length),
						value: 0,
						color: randomColor(),
					},
				],
			};
		case EAction.DATASET2_REMOVE:
			return {
				...state,
				dataSet2: state.dataSet2
					.slice(0, action.payload)
					.concat(...state.dataSet2.slice(action.payload + 1)),
			};
		case EAction.DATASET2_SET_LABEL:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				label: action.payload.data,
			};
			return { ...state, dataSet2: clone };
		case EAction.DATASET2_SET_VALUE:
			//Pie/Doughnut chart does not accept negative values
			if (state.selectedChart === 3 || state.selectedChart === 4) {
				if (action.payload.data.includes("-")) {
					return state;
				}
			}
			clone[action.payload.index] = {
				...clone[action.payload.index],
				value: Number(action.payload.data),
			};
			return { ...state, dataSet2: clone };
		case EAction.DATASET2_SET_COLOR:
			clone[action.payload.index] = {
				...clone[action.payload.index],
				color: action.payload.data,
			};
			return { ...state, dataSet2: clone };
		default:
			return state;
	}
};

export default Reducer;
