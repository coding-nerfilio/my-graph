import charList from "../types/chartsList";
import ChartSelector from "./ChartSelector";

const ChartList = () => {
	return (
		<div>
			{charList.map((chart) => (
				<ChartSelector name={chart.name} icon={chart.icon} />
			))}
		</div>
	);
};

export default ChartList;
