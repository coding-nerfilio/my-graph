import { Action, EAction } from "../actions";

const chartData = {
	setX: (value: string): Action => ({
		type: EAction.CHARTDATA_SETX,
		payload: value,
	}),
	setY: (value: string): Action => ({
		type: EAction.CHARTDATA_SETY,
		payload: value,
	}),
	setZ: (value: string): Action => ({
		type: EAction.CHARTDATA_SETZ,
		payload: value,
	}),
	clearData: (): Action => ({
		type: EAction.CHARTDATA_CLEAR,
		payload: null,
	}),
};

export { chartData };
