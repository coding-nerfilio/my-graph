import { adapter1 } from "./adapter1";
import { adapter2 } from "./adapter2";
import { adapter3 } from "./adapter3";

const ChartAdapters = {
	Line: adapter1,
	Bar: adapter2,
	Pie: adapter3,
	Doughnut: adapter3,
	ScatterPlot: {},
	Histogram: {},
};

export default ChartAdapters;
