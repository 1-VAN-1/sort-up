export default function quickSortAlgo(inputArray) {
	if (inputArray.length <= 1) {
		return inputArray;
	}

	const left = [];
	const right = [];
	const newArray = [];

	const pivot = inputArray.pop();
	const length = inputArray.length;

	for (let i = 0; i < length; i++) {
		if (inputArray[i] <= pivot) {
			left.push(inputArray[i]);
		} else {
			right.push(inputArray[i]);
		}
	}

	return newArray.concat(quickSortAlgo(left), pivot, quickSortAlgo(right));
}
