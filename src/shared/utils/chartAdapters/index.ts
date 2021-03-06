import { adapter1 } from "./adapter1";
import { adapter2 } from "./adapter2";
import { adapter3 } from "./adapter3";
import { adapter4 } from "./adapter4";
import { adapter5 } from "./adapter5";
import { adapter6 } from "./adapter6";
import { minAndMaxBar } from "./minAndMaxBar";

const ChartAdapters = {
	Line: adapter1,
	Bar: { adapter: adapter2, scale: minAndMaxBar },
	Pie: adapter3,
	Doughnut: adapter3,
	ScatterPlot: adapter4,
	Histogram: adapter5,
	Radar: adapter6,
};

export default ChartAdapters;
