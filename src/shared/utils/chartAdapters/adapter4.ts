import { DataSet4 } from "../../../types/store";

type dataset = {
	label: string;
	data: Array<{ x: number; y: number }>;
	backgroundColor: string;
};

export const adapter4 = (input: Array<DataSet4>) => {
	let dataArray: Array<dataset> = [];

	input.forEach((dataset) => {
		dataArray.push({
			label: dataset.label,
			backgroundColor: dataset.color,
			data: createPoints(dataset.arrayX, dataset.arrayY),
		});
	});

	return { datasets: dataArray };
};

const createPoints = (
	x: Array<number>,
	y: Array<number>
): Array<{ x: number; y: number }> => {
	let returnValue: Array<{ x: number; y: number }> = [];
	x.forEach((xvalue, index) => {
		returnValue.push({
			x: xvalue,
			y: y[index],
		});
	});
	return returnValue;
};
