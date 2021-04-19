import useSelectInput from "../../shared/hooks/useSelectInput";
import "./style.scss";

const ChartInputs = () => {
	const InputComponent = useSelectInput();
	return (
		<div className="chart-inputs">
			<div style={{ marginTop: 5, marginBottom: 5 }}>Datasets:</div>
			{InputComponent}
		</div>
	);
};

export default ChartInputs;
