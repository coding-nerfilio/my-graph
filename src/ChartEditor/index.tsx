import Button from "../shared/components/Button";
import ChartHeader from "./ChartHeader";
import "./style.scss";
const ChartEditor = () => {
	return (
		<div className="chart-editor">
			<h1>MyGraph</h1>
			<ChartHeader />
			<Button>A</Button>
		</div>
	);
};

export default ChartEditor;
