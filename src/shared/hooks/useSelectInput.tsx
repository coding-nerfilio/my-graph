import { useContext, useEffect, useState } from "react";
import { BarPieInputs, PlotInputs } from "../../ChartEditor/ChartInputs/setups";
import { State } from "../../types/store";
import { Context } from "../store";

const useSelectInput = () => {
	const [input, setInput] = useState(<></>);
	const [state] = useContext<[State]>(Context);

	useEffect(() => {
		switch (state.selectedChart) {
			case 0:
				setInput(<PlotInputs />);
				break;
			case 1:
				setInput(<></>);
				break;
			case 2:
			case 3:
				setInput(<BarPieInputs />);
				break;
			case 4:
				setInput(<></>);
				break;
		}
	}, [state.selectedChart]);

	return input;
};

export default useSelectInput;
