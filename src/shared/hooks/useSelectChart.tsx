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
					setChart(<Line data={{}} />);
					break;
				case 1:
					setChart(<Scatter data={{}} />);
					break;
				case 2:
					setChart(<Bar data={{}} />);
					break;
				case 3:
					setChart(<Pie data={{}} />);
					break;
				case 4:
					setChart(<Bar data={{}} />);
					break;
			}
		};
		select();
	}, [state.selectedChart]);

	return chart;
};

export default useSelectChart;
