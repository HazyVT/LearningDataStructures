import { expect, test } from 'bun:test';
import binary_search from './binary_search.ts';
import linear_search from './linear_search.ts';

test("Linear Search", () => {
	expect(linear_search([5,4,2,8,6,1], 2)).toBe(true);
})

test("Binary Search", () => {
	expect(binary_search([1,2,3,4,5,6], 2)).toBe(true);
})
