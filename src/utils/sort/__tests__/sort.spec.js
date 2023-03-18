import { describe, it, expect } from 'vitest';
import { bubbleSort, heapSort, quickSort, selectionSort } from '..';

describe('Sort', () => {
	const testCases = [
		{ input: [5, 1, 3, 4, 2], output: [1, 2, 3, 4, 5] },
		{ input: [-1, 1, 0, 25, 1025], output: [-1, 0, 1, 25, 1025] },
		{ input: [-20020, 1000, 5, 0], output: [-20020, 0, 5, 1000] },
		{ input: [1, 1, 1, 1, 1], output: [1, 1, 1, 1, 1] },
		{ input: [5], output: [5] },
	];

	it('bubble sort properly', () => {
		testCases.forEach((value) =>
			expect(bubbleSort([...value.input])).toEqual(value.output)
		);
	});

	it('selection sort properly', () => {
		testCases.forEach((value) =>
			expect(selectionSort([...value.input])).toEqual(value.output)
		);
	});

	it('quick sort properly', () => {
		testCases.forEach((value) =>
			expect(quickSort([...value.input])).toEqual(value.output)
		);
	});

	it('heap sort properly', () => {
		testCases.forEach((value) =>
			expect(heapSort([...value.input])).toEqual(value.output)
		);
	});
});
