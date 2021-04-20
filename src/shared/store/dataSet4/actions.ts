import { Action, EAction } from "../actions";

export const dataSet4 = {
	clear: (): Action => ({ type: EAction.DATASET4_CLEAR, payload: null }),
	add: (): Action => ({ type: EAction.DATASET4_ADD, payload: null }),
	remove: (index: number): Action => ({
		type: EAction.DATASET4_REMOVE,
		payload: index,
	}),
	setLabel: (index: number, data: string): Action => ({
		type: EAction.DATASET4_SET_LABEL,
		payload: { index, data },
	}),
	setRawX: (index: number, data: string): Action => ({
		type: EAction.DATASET4_SET_RAWX,
		payload: { index, data },
	}),
	setRawY: (index: number, data: string): Action => ({
		type: EAction.DATASET4_SET_RAWY,
		payload: { index, data },
	}),

	setColor: (index: number, data: string): Action => ({
		type: EAction.DATASET4_SET_COLOR,
		payload: { index, data },
	}),
};
