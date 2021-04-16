import { useEffect, useState } from "react";
import "./style.scss";

const Icon = (props: { name: string }) => {
	const [icon, setIcon] = useState<any>(null);

	const dinamicImport = async () => {
		switch (props.name) {
			case "Bar":
				setIcon(await (await import("../../../assets/images/Bar.svg")).default);
				break;
			case "Histogram":
				setIcon(
					await (await import("../../../assets/images/Histogram.svg")).default
				);
				break;
			case "Pie":
				setIcon(await (await import("../../../assets/images/Pie.svg")).default);
				break;
			case "Plot":
				setIcon(
					await (await import("../../../assets/images/Plot.svg")).default
				);
				break;
			case "ScatterPlot":
				setIcon(
					await (await import("../../../assets/images/Scatter Plot.svg"))
						.default
				);
				break;
		}
	};

	useEffect(() => {
		if (icon === null) dinamicImport();
	}, [icon]);

	return (
		<div className="icon">{icon !== null ? <img src={icon} /> : <></>}</div>
	);
};

export default Icon;
