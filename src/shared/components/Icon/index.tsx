import { useEffect, useState } from "react";
import { icon } from "../../../types/icons";
import "./style.scss";

const Icon = (props: { name: icon }) => {
	const [icon, setIcon] = useState<any>(null);

	useEffect(() => {
		const dinamicImport = async () => {
			switch (props.name) {
				case "Bar":
					setIcon(
						await (await import("../../../assets/images/Bar.svg")).default
					);
					break;
				case "Histogram":
					setIcon(
						await (await import("../../../assets/images/Histogram.svg")).default
					);
					break;
				case "Pie":
					setIcon(
						await (await import("../../../assets/images/Pie.svg")).default
					);
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
				case "Doughnut":
					setIcon(
						await (await import("../../../assets/images/Doughnut.svg")).default
					);
					break;
				case "Cross":
					setIcon(
						await (await import("../../../assets/images/Cross.svg")).default
					);
					break;
				case "Tick":
					setIcon(
						await (await import("../../../assets/images/Tick.svg")).default
					);
					break;
				case "Delete":
					setIcon(
						await (await import("../../../assets/images/Delete.svg")).default
					);
					break;
				case "Edit":
					setIcon(
						await (await import("../../../assets/images/Edit.svg")).default
					);
					break;
				case "Polar":
					setIcon(
						await (await import("../../../assets/images/Polar.svg")).default
					);
					break;
				case "Radar":
					setIcon(
						await (await import("../../../assets/images/Radar.svg")).default
					);
					break;
			}
		};
		dinamicImport();
	}, [icon, props.name]);

	return (
		<div className="icon">
			{icon !== null ? <img alt="Icon" src={icon} /> : <></>}
		</div>
	);
};

export default Icon;
