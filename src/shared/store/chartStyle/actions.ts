import { Action, EAction } from "../../../types/store/actions";

const chartStyle = {
	set: (index: number): Action => ({
		type: EAction.CHARTSTYLE_SET,
		payload: index,
	}),
};

export { chartStyle };
