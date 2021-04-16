import { textToArray, arrayToText } from "../src/shared/utils/convertions";
describe("Text to array", () => {
	test("Normal input", () => {
		expect.assertions(2);
		let value = textToArray("341,22,4231.5,55");
		expect(value).toEqual<Array<number>>(
			expect.arrayContaining([341, 22, 4231.5, 55])
		);
		expect(value.length).toBe(4);
	});

	test("Sanatize invalid characters", () => {
		expect.assertions(2);
		let value = textToArray("@s55,231,904,!fjsad,7");
		expect(value).toEqual<Array<number>>(
			expect.arrayContaining([55, 231, 904, 7])
		);
		expect(value.length).toBe(4);
	});

	test("Remove brackets", () => {
		expect.assertions(2);
		let value = textToArray("[3213,3213,331,45]");
		expect(value).toEqual<Array<number>>(
			expect.arrayContaining([3213, 3213, 331, 45])
		);
		expect(value.length).toBe(4);
	});
});

describe("Array to text", () => {
	test("Array of numbers to string", () => {
		let value = arrayToText([300, 312, 32.45, 302]);
		expect(value).toBe("300,312,32.45,302");
	});
	test("Empty array", () => {
		let value = arrayToText([]);
		expect(value).toBe("");
	});
});
