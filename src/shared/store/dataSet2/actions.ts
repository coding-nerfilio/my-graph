import { Action, EAction } from "../actions";

export const dataSet2 = {
	clear: (): Action => ({ type: EAction.DATASET2_CLEAR, payload: null }),
	add: (): Action => ({ type: EAction.DATASET2_ADD, payload: null }),
	remove: (index: number): Action => ({
		type: EAction.DATASET2_REMOVE,
		payload: index,
	}),
	setLabel: (index: number, data: string): Action => ({
		type: EAction.DATASET2_SET_LABEL,
		payload: { index, data },
	}),
	setValue: (index: number, data: string): Action => ({
		type: EAction.DATASET2_SET_VALUE,
		payload: { index, data },
	}),
	setColor: (index: number, data: string): Action => ({
		type: EAction.DATASET2_SET_COLOR,
		payload: { index, data },
	}),
};
