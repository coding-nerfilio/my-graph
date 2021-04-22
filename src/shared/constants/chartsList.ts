import { icon } from "../../types/icons";

interface chart {
	icon: icon;
	name: string;
}

const charList: Array<chart> = [
	{ icon: "Plot", name: "Plot" },
	{ icon: "ScatterPlot", name: "Scatter Plot" },
	{ icon: "Bar", name: "Bar chart" },
	{ icon: "Pie", name: "Pie Chart" },
	{ icon: "Doughnut", name: "Doughnut" },
	{ icon: "Histogram", name: "Histogram" },
	{ icon: "Radar", name: "Radar" },
	{ icon: "Polar", name: "Polar" },
];

export default charList;
