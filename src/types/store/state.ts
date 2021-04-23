import { RandomDataset } from "../../shared/utils/exampleData";
import { DataSet1, DataSet2, DataSet3, DataSet4 } from "../dataset";

export type State = {
	selectedChart: number;
	chartStyle: number;

	dataSet1: Array<DataSet1>;
	dataSet2: Array<DataSet2>;
	dataSet3: DataSet3;
	dataSet4: Array<DataSet4>;
};

export const initialState: State = {
	selectedChart: 0,

	chartStyle: 0,

	dataSet1: RandomDataset(1) as DataSet1[],
	dataSet2: RandomDataset(2) as DataSet2[],
	dataSet3: RandomDataset(3) as DataSet3,
	dataSet4: RandomDataset(4) as DataSet4[],
};
