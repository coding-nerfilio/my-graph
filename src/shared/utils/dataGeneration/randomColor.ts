export const randomColor = (): string => {
	let color: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
	if (color.length !== 7) {
		for (let i = color.length; i < 7; i++) {
			color += "0";
		}
	}
	return color;
};
