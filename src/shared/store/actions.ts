import { selectedChart } from "./selectedChart/actions";
import { chartStyle } from "./chartStyle/actions";
import { charLabels } from "./chartLabels/actions";
import { chartData } from "./chartData/actions";

export enum EAction {
	SELECTEDCHART_SET,

	CHARTSTYLE_SET,

	CHARTLABEL_SETX,
	CHARTLABEL_SETY,
	CHARLABEL_CLEAR,

	CHARTDATA_SETX,
	CHARTDATA_SETY,
	CHARTDATA_SETZ,
	CHARTDATA_CLEAR,
}

export type Action =
	| { type: EAction.SELECTEDCHART_SET; payload: number }
	| { type: EAction.CHARTSTYLE_SET; payload: number }
	| { type: EAction.CHARTLABEL_SETX; payload: string }
	| { type: EAction.CHARTLABEL_SETY; payload: string }
	| { type: EAction.CHARLABEL_CLEAR; payload: null }
	| { type: EAction.CHARTDATA_SETX; payload: Array<number> }
	| { type: EAction.CHARTDATA_SETY; payload: Array<number> }
	| { type: EAction.CHARTDATA_SETZ; payload: Array<number> }
	| { type: EAction.CHARTDATA_CLEAR; payload: null };

const Actions = {
	selectedChart,
	chartStyle,
	charLabels,
	chartData,
};
export default Actions;
