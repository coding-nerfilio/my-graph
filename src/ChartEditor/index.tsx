import ChartHeader from "./ChartHeader";
import ChartInputs from "./ChartInputs";
import ChartVisualize from "./ChartVisualize";
import "./style.scss";
import logo from "../assets/images/Logo.svg";
import Footer from "./Footer";
const ChartEditor = () => {
	return (
		<div className="chart-editor">
			<div style={{ width: "97%" }}>
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

			<Footer />
		</div>
	);
};

export default ChartEditor;
