import { adapter1 } from "./adapter1";
import { adapter2 } from "./adapter2";
import { adapter3 } from "./adapter3";
import { minAndMaxBar } from "./minAndMaxBar";

const ChartAdapters = {
	Line: adapter1,
	Bar: { adapter: adapter2, scale: minAndMaxBar },
	Pie: adapter3,
	Doughnut: adapter3,
	ScatterPlot: {},
	Histogram: {},
};

export default ChartAdapters;
