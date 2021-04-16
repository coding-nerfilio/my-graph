import ChartHeader from "./ChartHeader";
import ChartVisualize from "./ChartVisualize";
import "./style.scss";
const ChartEditor = () => {
	return (
		<div className="chart-editor">
			<h1>MyGraph</h1>
			<ChartHeader />
			<ChartVisualize />
		</div>
	);
};

export default ChartEditor;
