import selectedChart from "./selectedChart/reducer";
import chartStyle from "./chartStyle/reducer";
import dataSet1 from "./dataSet1/reducer";
import dataSet2 from "./dataSet2/reducer";
import dataSet3 from "./dataSet3/reducer";
import dataSet4 from "./dataSet4/reducer";
import dataSet5 from "./dataSet5/reducer";
import { State } from "../../types/store/state";
import { Action, EAction } from "../../types/store/actions";

const RootReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.SELECTEDCHART_SET:
			return selectedChart(state, action);

		case EAction.CHARTSTYLE_SET:
			return chartStyle(state, action);

		case EAction.DATASET1_CLEAR:
		case EAction.DATASET1_ADD:
		case EAction.DATASET1_REMOVE:
		case EAction.DATASET1_SET_LABEL:
		case EAction.DATASET1_SET_RAW:
		case EAction.DATASET1_SET_COLOR:
			return dataSet1(state, action);

		case EAction.DATASET2_CLEAR:
		case EAction.DATASET2_ADD:
		case EAction.DATASET2_REMOVE:
		case EAction.DATASET2_SET_LABEL:
		case EAction.DATASET2_SET_VALUE:
		case EAction.DATASET2_SET_COLOR:
			return dataSet2(state, action);

		case EAction.DATASET3_CLEAR:
		case EAction.DATASET3_SET_LABEL:
		case EAction.DATASET3_SET_RAW:
		case EAction.DATASET3_SET_COLOR:
			return dataSet3(state, action);

		case EAction.DATASET4_ADD:
		case EAction.DATASET4_CLEAR:
		case EAction.DATASET4_REMOVE:
		case EAction.DATASET4_SET_LABEL:
		case EAction.DATASET4_SET_RAWX:
		case EAction.DATASET4_SET_RAWY:
		case EAction.DATASET4_SET_COLOR:
			return dataSet4(state, action);

		case EAction.DATASET5_CLEAR:
		case EAction.DATASET5_ADD:
		case EAction.DATASET5_REMOVE:
		case EAction.DATASET5_SET_RAW:
		case EAction.DATASET5_SET_COLOR:
		case EAction.DATASET5_SET_LABEL:
		case EAction.DATASET5_SET_TITLE:
			return dataSet5(state, action);
		default:
			return state;
	}
};

export default RootReducer;
