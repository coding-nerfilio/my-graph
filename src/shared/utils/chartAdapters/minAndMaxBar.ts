import { DataSet2 } from "../../../types/store";

export const minAndMaxBar = (input: DataSet2[]) => {
	let min = 0,
		max = 0;

	input.forEach((dataset) => {
		if (dataset.raw < min) {
			min = dataset.raw;
		}
		if (dataset.raw > max) {
			max = dataset.raw;
		}
	});

	return {
		min: min - min / 5,
		max: max + max / 5,
		stepSize: max / 10,
	};
};
