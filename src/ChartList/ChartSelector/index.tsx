import "./style.scss";

const ChartSelector = (props: { icon: string; name: string }) => {
	return (
		<div className="chart-selector">
			<div className="chart-selector-icon">{props.icon}</div>
			<div className="chart-selector-name">{props.name}</div>
		</div>
	);
};

export default ChartSelector;
