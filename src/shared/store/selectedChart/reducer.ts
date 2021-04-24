import {
	DataSet2,
	DataSet1,
	DataSet4,
	DataSet3,
	DataSet5,
} from "../../../types/dataset";
import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";
import { RandomDataset } from "../../utils/dataGeneration/exampleData";

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.SELECTEDCHART_SET:
			switch (action.payload) {
				case 0:
					return {
						...state,
						selectedChart: action.payload,
						dataSet1: RandomDataset(1) as DataSet1[],
					};
				case 1:
					return {
						...state,
						selectedChart: action.payload,
						dataSet4: RandomDataset(4) as DataSet4[],
					};
				case 2:
				case 3:
				case 4:
				case 7:
					return {
						...state,
						selectedChart: action.payload,
						dataSet2: RandomDataset(2) as DataSet2[],
					};
				case 5:
					return {
						...state,
						selectedChart: action.payload,
						dataSet3: RandomDataset(3) as DataSet3,
					};
				case 6:
					return {
						...state,
						selectedChart: action.payload,
						dataSet5: RandomDataset(5) as DataSet5,
					};

				default:
					return state;
			}
		default:
			return state;
	}
};

export default Reducer;
