import { Action, EAction } from "../actions";

const chartData = {
	setX: (value: Array<number>): Action => ({
		type: EAction.CHARTDATA_SETX,
		payload: value,
	}),
	setY: (value: Array<number>): Action => ({
		type: EAction.CHARTDATA_SETY,
		payload: value,
	}),
	setZ: (value: Array<number>): Action => ({
		type: EAction.CHARTDATA_SETZ,
		payload: value,
	}),
	clearData: (): Action => ({
		type: EAction.CHARTDATA_CLEAR,
		payload: null,
	}),
};

export { chartData };
