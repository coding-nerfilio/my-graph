import { RandomDataset } from "../shared/utils/exampleData";

export type DataSet = {
	label: string;
	raw: string;
	array: Array<number>;
};

export type DataSet1 = {
	label: string;
	raw: string;
	array: Array<number>;
	color: string;
};

export type DataSet2 = {
	label: string;
	raw: number;
	color: string;
};

export type DataSet3 = {
	label: string;
	raw: string;
	array: Array<number>;
	color: string;
};

export type DataSet4 = {
	label: string;
	rawX: string;
	rawY: string;
	arrayX: Array<number>;
	arrayY: Array<number>;
	color: string;
};

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
