import { RandomDataset } from "../../shared/utils/dataGeneration/exampleData";
import { DataSet1, DataSet2, DataSet3, DataSet4, DataSet5 } from "../dataset";

export type State = {
	selectedChart: number;
	chartStyle: number;

	dataSet1: Array<DataSet1>;
	dataSet2: Array<DataSet2>;
	dataSet3: DataSet3;
	dataSet4: Array<DataSet4>;
	dataSet5: DataSet5;
};

export const initialState: State = {
	selectedChart: 0,

	chartStyle: 0,

	dataSet1: RandomDataset(1) as DataSet1[],
	dataSet2: RandomDataset(2) as DataSet2[],
	dataSet3: RandomDataset(3) as DataSet3,
	dataSet4: RandomDataset(4) as DataSet4[],
	dataSet5: RandomDataset(5) as DataSet5,
};
