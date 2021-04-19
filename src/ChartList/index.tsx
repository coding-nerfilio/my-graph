import Icon from "../shared/components/Icon";
import charList from "../shared/constants/chartsList";
import ChartSelector from "./ChartSelector";
import "./style.scss";

const ChartList = () => {
	return (
		<div className="chart-list">
			{charList.map((chart, index) => (
				<ChartSelector
					name={chart.name}
					index={index}
					key={index}
					icon={<Icon name={chart.icon} />}
				/>
			))}
		</div>
	);
};

export default ChartList;
