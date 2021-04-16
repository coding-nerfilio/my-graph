import { useContext } from "react";
import charList from "../../shared/constants/chartsList";
import { Context } from "../../shared/store";
import { State } from "../../types/store";
import "./style.scss";
const ChartHeader = () => {
	const [state] = useContext<[State]>(Context);

	return (
		<div className="fr chart-header">
			<div>
				<h2>{charList[state.selectedChart].name}</h2>
			</div>
			<div className="fr">
				<button>Download</button>

				<button>Style</button>
			</div>
		</div>
	);
};

export default ChartHeader;
