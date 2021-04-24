import { DataSet2 } from "../../../types/dataset";

export const adapter3 = (input: Array<DataSet2>) => {
	const labels: Array<string> = [];
	const data: Array<number> = [];
	const colors: Array<string> = [];
	input.forEach((dataset) => {
		labels.push(dataset.label);
		data.push(dataset.raw);
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
