const letters = [
	"X",
	"Y",
	"Z",
	"P",
	"Q",
	"R",
	"S",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"M",
	"N",
	"L",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"V",
	"O",
	"W",
	"X",
	"Y",
	"Z",
];
export const newLabel = (length: number): string => {
	if (length < letters.length) {
		return letters[length];
	} else {
		return letters[Math.floor(Math.random() * (letters.length - 0 + 1) + 0)];
	}
};
