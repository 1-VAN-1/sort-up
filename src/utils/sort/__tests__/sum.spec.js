import { describe, it, expect } from 'vitest';

describe('Sum', () => {
	it('sum properly', () => {
		const array = [1, 2, 3, 4, 5];
		expect(sum(array)).toEqual(15);
	});
});

function sum(array) {
	return array.reduce((previous, current) => previous + current);
}
