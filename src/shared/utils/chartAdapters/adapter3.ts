import { DataSet2 } from "../../../types/store";

type dataset = {
	label: string;
	data: Array<number>;
	backgroundColor: Array<string>;
	hoverOffset: 4;
};

type adapterType = {
	labels: Array<string>;
	datasets: Array<dataset>;
};

export const adapter3 = (input: Array<DataSet2>): adapterType => {
	const labels: Array<string> = [];
	const data: Array<number> = [];
	const colors: Array<string> = [];
	input.forEach((dataset) => {
		labels.push(dataset.label);
		data.push(dataset.value);
		colors.push(dataset.color);
	});

	return {
		labels,
		datasets: [
			{
				label: "",
				data,
				backgroundColor: colors,
				hoverOffset: 4,
			},
		],
	};
};
