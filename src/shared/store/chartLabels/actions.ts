import { Action, EAction } from "../actions";

const charLabels = {
	setX: (value: string): Action => ({
		type: EAction.CHARTLABEL_SETX,
		payload: value,
	}),
	setY: (value: string): Action => ({
		type: EAction.CHARTLABEL_SETY,
		payload: value,
	}),
	clearLabels: (): Action => ({
		type: EAction.CHARLABEL_CLEAR,
		payload: null,
	}),
};

export { charLabels };
