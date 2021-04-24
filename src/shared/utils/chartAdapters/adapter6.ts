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
	input.datasets.forEach((dataset, index) => {
		datasets.push({
			label: String(index),
			data: dataset.array,
			fill: true,
			backgroundColor: dataset.color + "11",
			borderColor: dataset.color,
			pointBackgroundColor: dataset.color,
		});
	});
	return {
		labels: textToTextArray(input.labels),
		datasets: datasets,
	};
};

/*const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};*/
