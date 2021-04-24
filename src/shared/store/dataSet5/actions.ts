import { Action, EAction } from "../../../types/store/actions";

export const dataSet5 = {
	clear: (): Action => ({ type: EAction.DATASET5_CLEAR, payload: null }),
	add: (): Action => ({ type: EAction.DATASET5_ADD, payload: null }),
	remove: (index: number): Action => ({
		type: EAction.DATASET5_REMOVE,
		payload: index,
	}),
	setLabel: (index: number, data: string): Action => ({
		type: EAction.DATASET5_SET_LABEL,
		payload: { index, data },
	}),
	setRawX: (index: number, data: string): Action => ({
		type: EAction.DATASET5_SET_RAWX,
		payload: { index, data },
	}),
	setRawY: (index: number, data: string): Action => ({
		type: EAction.DATASET5_SET_RAWY,
		payload: { index, data },
	}),

	setColor: (index: number, data: string): Action => ({
		type: EAction.DATASET5_SET_COLOR,
		payload: { index, data },
	}),
};
