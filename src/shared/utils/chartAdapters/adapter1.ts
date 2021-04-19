import { DataSet1 } from "../../../types/store";

type dataset = {
	label: string;
	data: Array<number>;
	fill: boolean;
	borderColor: string;
	tension: number;
};
type adapterType = {
	labels: Array<string>;
	datasets: Array<dataset>;
};

export const adapter1 = (data: Array<DataSet1>): adapterType => {
	let datasets: Array<dataset> = [];
	let labels: Array<string> = [];
	let amountOfLabels = 0;

	data.forEach((dataset) => {
		datasets.push({
			label: dataset.label,
			data: dataset.array,
			fill: false,
			borderColor: dataset.color,
			tension: 0.1,
		});
		if (dataset.array.length > amountOfLabels) {
			amountOfLabels = dataset.array.length;
		}
	});

	for (let i = 0; i <= amountOfLabels; i++) {
		labels.push("");
	}

	return { labels, datasets };
};
