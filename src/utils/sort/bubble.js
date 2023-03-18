export default function (inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0, stop = inputArray.length - i; j < stop; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        swap(inputArray, j, j + 1);
      }
    }
  }

  return inputArray;
}

function swap(arr, firstIndex, secondIndex) {
	const temp = arr[firstIndex];

	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
}
