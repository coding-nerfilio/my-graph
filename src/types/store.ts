import { randomColor } from "../shared/utils/randomColor";

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

export type State = {
	selectedChart: number;
	chartStyle: number;

	dataSet1: Array<DataSet1>;
	dataSet2: Array<DataSet2>;
	dataSet3: DataSet3;
};

export const defaultData = {
	dataSet1: [{ label: "X", color: randomColor(), raw: "", array: [] }],
	dataSet2: [{ label: "X", color: randomColor(), raw: 100 }],
	dataSet3: {
		label: "X",
		raw: "",
		array: [],
		color: randomColor(),
	},
};

export const initialState: State = {
	selectedChart: 0,

	chartStyle: 0,

	dataSet1: defaultData.dataSet1,
	dataSet2: defaultData.dataSet2,
	dataSet3: defaultData.dataSet3,
};
