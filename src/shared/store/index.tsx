import { createContext, useReducer } from "react";
import { initialState } from "../../types/store/state";
import Reducer from "./reducer";

const Store = (props: { children?: any }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<Context.Provider value={[state, dispatch]}>
			{props.children}
		</Context.Provider>
	);
};

export const Context = createContext<any>(initialState);
export default Store;
