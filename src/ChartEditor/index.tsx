import ChartHeader from "./ChartHeader";
import ChartInputs from "./ChartInputs";
import ChartVisualize from "./ChartVisualize";
import "./style.scss";
import logo from "../assets/images/Logo.svg";
const ChartEditor = () => {
	return (
		<div className="chart-editor">
			<img
				src={logo}
				alt="logo"
				style={{ marginTop: 20 }}
				className="chart-logo"
			/>
			<ChartHeader />
			<ChartVisualize />
			<ChartInputs />
		</div>
	);
};

export default ChartEditor;
