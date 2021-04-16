import { useContext, useEffect, useState } from "react";
import { State } from "../../types/store";
import { Context } from "../store";
import { Line, Scatter, Pie, Bar } from "react-chartjs-2";

const useSelectChart = () => {
	const [chart, setChart] = useState(<></>);
	const [state] = useContext<[State]>(Context);

	useEffect(() => {
		const select = async () => {
			switch (state.selectedChart) {
				case 0:
					setChart(
						<Line
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
										fill: false,
										borderColor: "rgb(75, 192, 192)",
										tension: 0.1,
									},
								],
							}}
						/>
					);
					break;
				case 1:
					setChart(
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
								],
							}}
						/>
					);
					break;
				case 2:
					setChart(
						<Bar
							data={{
								labels: [
									"January",
									"February",
									"March",
									"April",
									"May",
									"June",
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
					);
					break;
				case 3:
					setChart(
						<Pie
							data={{
								labels: ["Red", "Blue", "Yellow"],
								datasets: [
									{
										label: "My First Dataset",
										data: [300, 50, 100],
										backgroundColor: [
											"rgb(255, 99, 132)",
											"rgb(54, 162, 235)",
											"rgb(255, 205, 86)",
										],
										hoverOffset: 4,
									},
								],
							}}
						/>
					);
					break;
				case 4:
					setChart(
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
					);
					break;
			}
		};
		select();
	}, [state.selectedChart]);

	return chart;
};

export default useSelectChart;
