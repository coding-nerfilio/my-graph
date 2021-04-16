import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import ChartList from "./ChartList";
import ChartEditor from "./ChartEditor";
import Store from "./shared/store";

import "./assets/sass/flex.scss";

ReactDOM.render(
	<React.StrictMode>
		<Store>
			<div className="fr">
				<ChartList />
				<ChartEditor />
			</div>
		</Store>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//afrobull naruto
