interface chart {
	icon: "Bar" | "Histogram" | "Pie" | "Plot" | "ScatterPlot" | "Doughnut";
	name: string;
}

const charList: Array<chart> = [
	{ icon: "Plot", name: "Plot" },
	{ icon: "ScatterPlot", name: "Scatter Plot" },
	{ icon: "Bar", name: "Bar chart" },
	{ icon: "Pie", name: "Pie Chart" },
	{ icon: "Doughnut", name: "Doughnut" },
];

export default charList;
