import { DataSet2 } from "../../../types/store";

type dataset = {
	label: string;
	data: Array<number>;
	backgroundColor: Array<string>;
	borderColor: Array<string>;
	borderWidth: 1;
};

type adapterType = {
	labels: Array<string>;
	datasets: Array<dataset>;
};

export const adapter2 = (input: Array<DataSet2>): adapterType => {
	const labels: Array<string> = [];
	const data: Array<number> = [];
	const color: Array<string> = [];
	input.forEach((dataset) => {
		labels.push(dataset.label);
		data.push(dataset.raw);
		color.push(dataset.color);
	});
	return {
		labels,
		datasets: [
			{
				label: "",
				data,
				backgroundColor: color,
				borderColor: color,
				borderWidth: 1,
			},
		],
	};
};
