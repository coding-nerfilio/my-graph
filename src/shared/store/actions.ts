import { selectedChart } from "./selectedChart/actions";
import { chartStyle } from "./chartStyle/actions";
import { dataSet1 } from "./dataSet1/actions";
import { dataSet2 } from "./dataSet2/actions";
import { dataSet3 } from "./dataSet3/actions";

export enum EAction {
	SELECTEDCHART_SET,

	CHARTSTYLE_SET,

	DATASET_CLEAR,

	DATASET1_CLEAR,
	DATASET1_ADD,
	DATASET1_REMOVE,
	DATASET1_SET_LABEL,
	DATASET1_SET_RAW,
	DATASET1_SET_COLOR,

	DATASET2_CLEAR,
	DATASET2_ADD,
	DATASET2_REMOVE,
	DATASET2_SET_LABEL,
	DATASET2_SET_VALUE,
	DATASET2_SET_COLOR,

	DATASET3_CLEAR,
	DATASET3_SET_LABEL,
	DATASET3_SET_RAW,
	DATASET3_SET_COLOR,
}

interface IndexedPayload<T> {
	index: number;
	data: T;
}

export type Action =
	| { type: EAction.SELECTEDCHART_SET; payload: number }
	| { type: EAction.CHARTSTYLE_SET; payload: number }
	| { type: EAction.DATASET_CLEAR; payload: null }
	| { type: EAction.DATASET1_CLEAR; payload: null }
	| { type: EAction.DATASET1_ADD; payload: null }
	| { type: EAction.DATASET1_REMOVE; payload: number }
	| { type: EAction.DATASET1_SET_LABEL; payload: IndexedPayload<string> }
	| { type: EAction.DATASET1_SET_RAW; payload: IndexedPayload<string> }
	| { type: EAction.DATASET1_SET_COLOR; payload: IndexedPayload<string> }
	| { type: EAction.DATASET2_CLEAR; payload: null }
	| { type: EAction.DATASET2_ADD; payload: null }
	| { type: EAction.DATASET2_REMOVE; payload: number }
	| { type: EAction.DATASET2_SET_LABEL; payload: IndexedPayload<string> }
	| { type: EAction.DATASET2_SET_VALUE; payload: IndexedPayload<string> }
	| { type: EAction.DATASET2_SET_COLOR; payload: IndexedPayload<string> }
	| { type: EAction.DATASET3_CLEAR; payload: null }
	| { type: EAction.DATASET3_SET_LABEL; payload: string }
	| { type: EAction.DATASET3_SET_RAW; payload: string }
	| { type: EAction.DATASET3_SET_COLOR; payload: string };

const Actions = {
	selectedChart,
	chartStyle,
	dataSet1,
	dataSet2,
	dataSet3,
};
export default Actions;
