export default function (array, compareFunction) {
	let min = 0;
	let index = 0;
	let temp = 0;

	compareFunction = compareFunction || compare;

	for (let i = 0; i < array.length; i += 1) {
		index = i;
		min = array[i];

		for (let j = i + 1; j < array.length; j += 1) {
			if (compareFunction(min, array[j]) > 0) {
				min = array[j];
				index = j;
			}
		}

		temp = array[i];
		array[i] = min;
		array[index] = temp;
	}
  
	return array;
}

function compare(a, b) {
  return a - b;
}
