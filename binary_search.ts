export default function binary_search(array: number[], needle: number) : boolean {
	let low = 0;
	let high = array.length;

	while ( low < high) {
		const midpoint = Math.floor(low + (high - low) / 2);
		const val = array[midpoint];	
		
		if (val === needle) {
			return true;
		} else if (val > midpoint){
			high = midpoint + 1;	
		} else {
			low = midpoint;
		}
	}

	return false;
}
