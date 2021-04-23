import { DataSet3 } from "../../../types/store";

type dataset = {
	label: string;
	data: Array<number>;
	backgroundColor: Array<string>;
	borderColor: Array<string>;
	borderWidth: 0;
};

export const adapter5 = (input: DataSet3) => {
	if (input.array.length === 0) {
		return emptyDataset;
	}

	let maxValue = 0;
	let minValue: number | undefined = undefined;
	let range = 0;
	let numberOfIntervals = 0;
	let intervalsWidth = 0;

	input.array.forEach((value) => {
		if (value > maxValue) {
			maxValue = value;
		}
		if (!minValue || value < minValue) {
			minValue = value;
		}
	});

	range = maxValue - minValue!;
	numberOfIntervals = Math.floor(Math.sqrt(input.array.length));

	intervalsWidth = range / numberOfIntervals;

	let ranges: Array<{ min: number; max: number; count: number }> = [];
	for (let i = 0; i < numberOfIntervals; i++) {
		ranges.push({
			min: minValue! + i * intervalsWidth,
			max:
				minValue! +
				i * intervalsWidth +
				intervalsWidth -
				(i === numberOfIntervals - 1 ? 0 : 1),
			count: 0,
		});
	}

	input.array.forEach((value) => {
		ranges.forEach((range, index) => {
			if (value >= range.min && value <= range.max) {
				ranges[index].count = ranges[index].count + 1;
			}
		});
	});

	const labels = ranges.map((range) =>
		String(Math.round(range.min) + " - " + Math.round(range.max))
	);
	return {
		data: {
			labels: labels,
			datasets: [
				{
					label: input.label,
					data: ranges.map((range) => range.count),
					backgroundColor: input.color,
				},
			],
		},
		options: {
			scales: {
				xAxes: [
					{
						barPercentage: 1.25,
					},
				],
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							min: undefined,
							max: undefined,
							stepSize: undefined,
						},
					},
				],
			},
			legend: {
				display: true,
			},
		},
	};
};

const emptyDataset = {
	data: { labels: [], datasets: [] },
	options: {},
};
