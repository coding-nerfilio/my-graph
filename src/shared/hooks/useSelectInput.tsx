import { useContext, useEffect, useState } from "react";
import {
	BarPieInputs,
	PlotInputs,
	ScatterInputs,
} from "../../ChartEditor/ChartInputs/setups";
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
				setInput(<ScatterInputs />);
				break;
			case 2:
			case 3:
			case 4:
				setInput(<BarPieInputs />);
				break;
		}
	}, [state.selectedChart]);

	return input;
};

export default useSelectInput;
