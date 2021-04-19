import useSelectInput from "../../shared/hooks/useSelectInput";
import "./style.scss";

const ChartInputs = () => {
	const InputComponent = useSelectInput();
	return <div className="chart-inputs">{InputComponent}</div>;
};

export default ChartInputs;
