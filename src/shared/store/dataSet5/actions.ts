import { Action, EAction } from "../../../types/store/actions";

export const dataSet5 = {
	clear: (): Action => ({ type: EAction.DATASET5_CLEAR, payload: null }),
	add: (): Action => ({ type: EAction.DATASET5_ADD, payload: null }),
	remove: (index: number): Action => ({
		type: EAction.DATASET5_REMOVE,
		payload: index,
	}),
	setLabel: (data: string): Action => ({
		type: EAction.DATASET5_SET_LABEL,
		payload: data,
	}),
	setRaw: (index: number, data: string): Action => ({
		type: EAction.DATASET5_SET_RAW,
		payload: { index, data },
	}),
	setTitle: (index: number, data: string): Action => ({
		type: EAction.DATASET5_SET_TITLE,
		payload: { index, data },
	}),
	setColor: (index: number, data: string): Action => ({
		type: EAction.DATASET5_SET_COLOR,
		payload: { index, data },
	}),
};
