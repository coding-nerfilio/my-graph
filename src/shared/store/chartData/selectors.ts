import { State } from "../../../types/store";
import { arrayToText } from "../../utils/convertions";

export const chartData = {
	rawArray: {
		x: (state: State) => state.chartData.x,
		y: (state: State) => state.chartData.y,
		z: (state: State) => state.chartData.z,
	},
	text: {
		x: (state: State) => arrayToText(state.chartData.x),
		y: (state: State) => arrayToText(state.chartData.y),
		z: (state: State) => arrayToText(state.chartData.z),
	},
};
