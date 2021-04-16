import ChartHeader from "./ChartHeader";
import ChartInputs from "./ChartInputs";
import ChartVisualize from "./ChartVisualize";
import "./style.scss";
const ChartEditor = () => {
	return (
		<div className="chart-editor">
			<h1>MyGraph</h1>
			<ChartHeader />
			<ChartVisualize />
			<ChartInputs />
		</div>
	);
};

export default ChartEditor;
