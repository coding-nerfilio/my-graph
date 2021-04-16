export const textToArray = (input: string): Array<number> => {
	let returnValue: Array<number> = [];

	//Sanitize text

	let sanitizedInput: string = "";

	for (let i = 0; i < input.length; i++) {
		let val = input[i];
		if (
			(val === "," || val === "." || !isNaN(Number(val))) &&
			!(val === "," && sanitizedInput[sanitizedInput.length - 1] === val)
		) {
			sanitizedInput += val;
		}
	}

	//Transform to array

	const splitedText: Array<string> = sanitizedInput.split(",");
	for (let i = 0; i < splitedText.length; i++) {
		const candidateNumber = Number(splitedText[i]);

		if (!isNaN(candidateNumber)) {
			returnValue.push(candidateNumber);
		}
	}

	return returnValue;
};

export const arrayToText = (input: Array<any>) => {
	let returnValue: string = "";
	for (let i = 0; i < input.length; i++) {
		returnValue += String(input[i]) + ",";
	}
	return returnValue;
};
