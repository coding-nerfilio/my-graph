import { Action, EAction } from "../actions";

export const dataSet1 = {
	clear: (): Action => ({ type: EAction.DATASET1_CLEAR, payload: null }),
	add: (): Action => ({ type: EAction.DATASET1_ADD, payload: null }),
	remove: (index: number): Action => ({
		type: EAction.DATASET1_REMOVE,
		payload: index,
	}),
	setLabel: (index: number, data: string): Action => ({
		type: EAction.DATASET1_SET_LABEL,
		payload: { index, data },
	}),
	setRaw: (index: number, data: string): Action => ({
		type: EAction.DATASET1_SET_RAW,
		payload: { index, data },
	}),
	setColor: (index: number, data: string): Action => ({
		type: EAction.DATASET1_SET_COLOR,
		payload: { index, data },
	}),
};
