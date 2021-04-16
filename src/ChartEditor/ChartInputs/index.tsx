import { useContext } from "react";
import Input from "../../shared/components/Input";
import { Context } from "../../shared/store";
import Actions, { Action } from "../../shared/store/actions";
import Selectors from "../../shared/store/selectors";
import { State } from "../../types/store";
import "./style.scss";

const ChartInputs = () => {
	const [state, dispatcher] = useContext<[State, (action: Action) => {}]>(
		Context
	);
	return (
		<div>
			<Input
				value={Selectors.chartData.text.x(state)}
				onChange={(e: any) =>
					dispatcher(Actions.chartData.setX(e.target.value))
				}
			/>
			<Input
				mt={10}
				value={Selectors.chartData.text.y(state)}
				onChange={(e: any) =>
					dispatcher(Actions.chartData.setY(e.target.value))
				}
			/>
			<Input
				mt={10}
				value={Selectors.chartData.text.z(state)}
				onChange={(e: any) =>
					dispatcher(Actions.chartData.setZ(e.target.value))
				}
			/>
		</div>
	);
};

export default ChartInputs;
