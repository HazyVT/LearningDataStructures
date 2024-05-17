type Node<T> {
	value: T,
	next?: Node<T>,
}

export default class Queue<T> {
	public length: number;
	private head?: Node<T>;

	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	enqueue(item: T) : void {
		const node = {value: item} as Node<T>;
		this.length++;
		if (!this.tail) {
			this.tail = this.head = node;
			return;
		};

		this.tail.next = node;
		this.tail = node;
		
	}

	deque() : T {
		if (!this.head) {return undefined};

		this.lenght--;

		const head = this.head;
		this.head = this.head.next;

		// Free
		head.next = undefined;

		return head.value;
	}

	peek() : T {
		return this.head?.value;
	}
}
