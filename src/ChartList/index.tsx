import Icon from "../shared/components/Icon";
import charList from "../shared/constants/chartsList";
import ChartSelector from "./ChartSelector";
import "./style.scss";

const ChartList = () => {
	return (
		<div className="chart-list">
			{charList.map((chart, index) => (
				<ChartSelector name={chart.name} index={index}>
					<Icon name={chart.icon} />
				</ChartSelector>
			))}
		</div>
	);
};

export default ChartList;
