export type State = {
	selectedChart: number;
	chartStyle: number;
	chartLabels: { x: string; y: string };
	chartData: { x: Array<number>; y: Array<number>; z: Array<number> };
};

export const initialState: State = {
	selectedChart: 1,
	chartData: { x: [], y: [], z: [] },
	chartStyle: 0,
	chartLabels: { x: "X", y: "Y" },
};
