import {
	DataSet1,
	DataSet2,
	DataSet3,
	DataSet4,
	DataSet5,
} from "../../../types/dataset";
import { randomColor } from "./randomColor";

const genRandomNumbers = (amount: number): { raw: string; array: number[] } => {
	let returnValue: { raw: string; array: number[] } = { raw: "", array: [] };

	for (let i = 0; i < amount; i++) {
		let randomNumber = Math.floor(Math.random() * 100) + 1;
		returnValue.raw += randomNumber.toString() + ",";
		returnValue.array.push(randomNumber);
	}

	return returnValue;
};

export const RandomDataset = (
	type: 1 | 2 | 3 | 4 | 5
): DataSet1[] | DataSet2[] | DataSet3 | DataSet4[] | DataSet5 => {
	switch (type) {
		case 1:
			let valueForDataset1 = genRandomNumbers(10);
			return [
				{
					label: "Example",
					color: randomColor(),
					raw: valueForDataset1.raw,
					array: valueForDataset1.array,
				},
			];
		case 2:
			let valueForDataset2 = genRandomNumbers(3);
			let dataset2: DataSet2[] = [];
			for (let i = 0; i <= 2; i++) {
				dataset2.push({
					label: "Example" + (i + 1),
					raw: valueForDataset2.array[i],
					color: randomColor(),
				});
			}
			return dataset2;
		case 3:
			let valueForDataset3 = genRandomNumbers(20);
			let dataset3: DataSet3 = {
				color: randomColor(),
				array: valueForDataset3.array,
				raw: valueForDataset3.raw,
				label: "Example",
			};
			return dataset3;
		case 4:
			let valueForDataset4 = {
				x: genRandomNumbers(10),
				y: genRandomNumbers(10),
			};
			return [
				{
					label: "Example",
					color: randomColor(),
					rawX: valueForDataset4.x.raw,
					arrayX: valueForDataset4.x.array,
					rawY: valueForDataset4.y.raw,
					arrayY: valueForDataset4.y.array,
				},
			];
		case 5:
			let valueForDataset5: Array<{
				color: string;
				raw: string;
				array: number[];
				label: string;
			}> = [];
			for (let i = 0; i < 2; i++) {
				let data = genRandomNumbers(4);
				valueForDataset5.push({
					raw: data.raw,
					array: data.array,
					color: randomColor(),
					label: "Example" + i,
				});
			}
			return {
				labels: "Example1,Example2,Example3,Example4,Example5",
				datasets: valueForDataset5,
			};

		default:
			return [];
	}
};
