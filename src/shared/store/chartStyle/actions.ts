import { Action, EAction } from "../actions";

const chartStyle = {
	set: (index: number): Action => ({
		type: EAction.CHARTSTYLE_SET,
		payload: index,
	}),
};

export { chartStyle };
