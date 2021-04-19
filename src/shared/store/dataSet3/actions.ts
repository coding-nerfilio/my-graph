import { Action, EAction } from "../actions";

export const dataSet3 = {
	clear: (): Action => ({ type: EAction.DATASET2_CLEAR, payload: null }),
	setLabel: (data: string): Action => ({
		type: EAction.DATASET3_SET_LABEL,
		payload: data,
	}),
	setRaw: (data: string): Action => ({
		type: EAction.DATASET3_SET_RAW,
		payload: data,
	}),
	setColor: (data: string): Action => ({
		type: EAction.DATASET3_SET_COLOR,
		payload: data,
	}),
};
