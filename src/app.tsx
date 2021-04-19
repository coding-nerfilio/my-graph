import { useState } from "react";
import ChartEditor from "./ChartEditor";
import ChartList from "./ChartList";

const App = () => {
	const [loading] = useState(false);

	return loading ? (
		<div>Loading</div>
	) : (
		<div className="fr">
			<ChartList />
			<ChartEditor />
		</div>
	);
};

export default App;
