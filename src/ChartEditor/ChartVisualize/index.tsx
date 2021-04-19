import useSelectChart from "../../shared/hooks/useSelectChart";
import "./style.scss";

const ChartVisualize = () => {
	const Chart = useSelectChart();
	return <div className="chart-visualize">{Chart}</div>;
};
export default ChartVisualize;
