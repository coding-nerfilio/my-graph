import { DataSet2, DataSet1, DataSet4, DataSet3 } from "../../../types/dataset";
import { Action, EAction } from "../../../types/store/actions";
import { State } from "../../../types/store/state";
import { RandomDataset } from "../../utils/exampleData";

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
