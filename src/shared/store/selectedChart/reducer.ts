import {
	DataSet2,
	DataSet1,
	DataSet4,
	State,
	DataSet3,
} from "../../../types/store";
import { RandomDataset } from "../../utils/exampleData";
import { Action, EAction } from "../actions";

const Reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case EAction.SELECTEDCHART_SET:
			return {
				...state,
				selectedChart: action.payload,
				dataSet1: RandomDataset(1) as DataSet1[],
				dataSet2: RandomDataset(2) as DataSet2[],
				dataSet3: RandomDataset(3) as DataSet3,
				dataSet4: RandomDataset(4) as DataSet4[],
			};
		default:
			return state;
	}
};

export default Reducer;
