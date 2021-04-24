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

export type DataSet5 = {
	labels: string;
	datasets: Array<{
		raw: string;
		array: Array<number>;
		color: string;
		label: string;
	}>;
};
