import charList from "../types/chartsList";
import ChartSelector from "./ChartSelector";

const ChartList = () => {
	return (
		<div>
			{charList.map((chart, index) => (
				<ChartSelector name={chart.name} icon={chart.icon} index={index} />
			))}
		</div>
	);
};

export default ChartList;
