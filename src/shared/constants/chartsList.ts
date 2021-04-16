interface chart {
	icon: "Bar" | "Histogram" | "Pie" | "Plot" | "ScatterPlot";
	name: string;
}

const charList: Array<chart> = [
	{ icon: "Plot", name: "Plot" },
	{ icon: "ScatterPlot", name: "Scatter Plot" },
	{ icon: "Bar", name: "Bar chart" },
	{ icon: "Pie", name: "Pie Chart" },
	{ icon: "Histogram", name: "Histogram" },
];

export default charList;
