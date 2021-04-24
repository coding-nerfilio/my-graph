import { useContext, useEffect, useState } from "react";

import { Context } from "../store";
import {
	Line,
	Scatter,
	Pie,
	Bar,
	Doughnut,
	Polar,
	Radar,
} from "react-chartjs-2";
import ChartAdapters from "../utils/chartAdapters";
import { State } from "../../types/store/state";

const useSelectChart = () => {
	const [chart, setChart] = useState(<></>);
	const [state] = useContext<[State]>(Context);

	useEffect(() => {
		switch (state.selectedChart) {
			case 0:
				setChart(<Line data={ChartAdapters.Line(state.dataSet1)} />);
				break;
			case 1:
				setChart(<Scatter data={ChartAdapters.ScatterPlot(state.dataSet4)} />);
				break;
			case 2:
				setChart(
					<Bar
						data={ChartAdapters.Bar.adapter(state.dataSet2)}
						options={{
							scales: {
								yAxes: [
									{
										type: "linear",
										ticks: ChartAdapters.Bar.scale(state.dataSet2),
									},
								],
							},
							legend: {
								display: false,
							},
						}}
					/>
				);
				break;
			case 3:
				setChart(<Pie data={ChartAdapters.Pie(state.dataSet2)} />);
				break;
			case 4:
				setChart(<Doughnut data={ChartAdapters.Doughnut(state.dataSet2)} />);
				break;
			case 5:
				let chartParameters = ChartAdapters.Histogram(state.dataSet3);
				setChart(
					<Bar data={chartParameters.data} options={chartParameters.options} />
				);
				break;
			case 6:
				setChart(<Radar data={ChartAdapters.Radar(state.dataSet5)} />);
				break;
			case 7:
				setChart(<Polar data={ChartAdapters.Doughnut(state.dataSet2)} />);
				break;
		}
	}, [
		state.selectedChart,
		state.dataSet1,
		state.dataSet2,
		state.dataSet3,
		state.dataSet4,
		state.dataSet5,
	]);

	return chart;
};

export default useSelectChart;
