import { DataSet2 } from "../../../types/store";

export const adapter2 = (input: Array<DataSet2>) => {
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
