import { DataSet5 } from "../../../types/dataset";
import { textToTextArray } from "../convertions";

export const adapter6 = (input: DataSet5) => {
	let datasets: {
		label: string;
		data: number[];
		fill: true;
		backgroundColor: string;
		borderColor: string;
		pointBackgroundColor: string;
	}[] = [];
	input.datasets.forEach((dataset) => {
		datasets.push({
			label: dataset.label,
			data: dataset.array,
			fill: true,
			backgroundColor: dataset.color + "33",
			borderColor: dataset.color,
			pointBackgroundColor: dataset.color,
		});
	});
	return {
		labels: textToTextArray(input.labels),
		datasets: datasets,
	};
};
