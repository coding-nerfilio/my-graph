import { useContext, useEffect, useState } from "react";
import { State } from "../../types/store";
import { Context } from "../store";
import { Line, Scatter, Pie, Bar } from "react-chartjs-2";
import ChartAdapters from "../utils/chartAdapters";

const useSelectChart = () => {
	const [chart, setChart] = useState(<></>);
	const [state] = useContext<[State]>(Context);

	useEffect(() => {
		switch (state.selectedChart) {
			case 0:
				setChart(<Line data={ChartAdapters.Line(state.dataSet1)} />);
				break;
			case 1:
				setChart(<Scatter data={ChartAdapters.ScatterPlot} />);
				break;
			case 2:
				setChart(<Bar data={ChartAdapters.Bar(state.dataSet2)} />);
				break;
			case 3:
				setChart(<Pie data={ChartAdapters.Pie(state.dataSet2)} />);
				break;
			case 4:
				setChart(<Bar data={ChartAdapters.Histogram} />);
				break;
		}
	}, [state.selectedChart, state.dataSet1, state.dataSet2, state.dataSet3]);

	return chart;
};

export default useSelectChart;

/*
<Scatter
							data={{
								datasets: [
									{
										label: "Scatter Dataset",
										data: [
											{
												x: -10,
												y: 0,
											},
											{
												x: 0,
												y: 10,
											},
											{
												x: 10,
												y: 5,
											},
											{
												x: 0.5,
												y: 5.5,
											},
										],
										backgroundColor: "rgb(255, 99, 132)",
									},
									{
										label: "Scatter Dset",
										data: [
											{
												x: -10,
												y: 5,
											},
											{
												x: 0,
												y: 1,
											},
											{
												x: 6,
												y: 1,
											},
											{
												x: 5,
												y: 5,
											},
										],
										backgroundColor: "rgb(0, 99, 132)",
									},
								],
							}}
						/>

<Bar
							data={{
								labels: [
									"January",
									"February",
									"March",
									"April",
									"May",
									"June",
									"July",
								],
								datasets: [
									{
										label: "My First Dataset",
										data: [65, 59, 80, 81, 56, 55, 40],
										backgroundColor: [
											"rgba(255, 99, 132, 0.2)",
											"rgba(255, 159, 64, 0.2)",
											"rgba(255, 205, 86, 0.2)",
											"rgba(75, 192, 192, 0.2)",
											"rgba(54, 162, 235, 0.2)",
											"rgba(153, 102, 255, 0.2)",
											"rgba(201, 203, 207, 0.2)",
										],
										borderColor: [
											"rgb(255, 99, 132)",
											"rgb(255, 159, 64)",
											"rgb(255, 205, 86)",
											"rgb(75, 192, 192)",
											"rgb(54, 162, 235)",
											"rgb(153, 102, 255)",
											"rgb(201, 203, 207)",
										],
										borderWidth: 1,
									},
								],
							}}
						/>
						*/
