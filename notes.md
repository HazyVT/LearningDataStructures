# Learning Data Structures
## Big O
This is not an exact time. This is used to estimate time it would take to run.

- Big O notation for time complexity of function.
- A for loop means a linear growth of time.
- Single for loop means O(n) complexity.
- Always drop constants when creating time complexity

```ts
function sum_char_codes(n: string) : number {
	let sum = 0;
	for let(i = 0; i < n.length; ++i) {
		const charCode = n.charCodeAt(i);
		// Capital E
		if (charCode === 69) {
			return sum;
		}

		sum += charCode;
	}

	return sum;
}
```


The time complexity of this function is O(n). This is due to estimate at worst case scenario at all times.

### Takeaways
- Growth with respect to the input
- Constants are dropped
- Worst case scenario

## Array Data Structures

### Array

An array is a fixed sized continous memory space.

## Algorithms

### Linear Search

Time complexity of a linear search is O(n).

### Binary Search

Always ask if the data set is ordered.
Time complexity is Log(n).

When value checking is greater than needle, move the high down to where the value checking is.

When the value is lesser than the needle, move the low to the value + 1 because we already know the value does not equal the needle and therefore does not need to be checked again.

### Bubble Sort
Time complexity is O(N2);

## Linked List

A daisy chain of nodes that point to another node.

## Queue

Time complexity is O(1).
