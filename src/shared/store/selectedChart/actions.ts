import { Action, EAction } from "../actions";

const selectedChart = {
	set: (index: number): Action => ({
		type: EAction.SELECTEDCHART_SET,
		payload: index,
	}),
};

export { selectedChart };
