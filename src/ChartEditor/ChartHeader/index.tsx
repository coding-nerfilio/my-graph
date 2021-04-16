import { useContext } from "react";
import Button from "../../shared/components/Button";
import charList from "../../shared/constants/chartsList";
import { Context } from "../../shared/store";
import { State } from "../../types/store";
import "./style.scss";
const ChartHeader = () => {
	const [state] = useContext<[State]>(Context);

	return (
		<div className="fr chart-header">
			<div>
				<h3>{charList[state.selectedChart].name}</h3>
			</div>
			<div className="fr">
				<Button mr={10}>Download</Button>
				<Button>Style</Button>
			</div>
		</div>
	);
};

export default ChartHeader;
