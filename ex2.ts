export function getLengthOfMissingArray(arrayOfArrays: any[]): number {

  if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;
  if (arrayOfArrays.some(arr => !arr || arr.length === 0)) return 0;

  const lengthForArray = arrayOfArrays.map(array => array.length).sort((a, b) => a - b);

  const lengthArrayTotal = Array.from({ length: lengthForArray[lengthForArray.length - 1] - lengthForArray[0] + 1 }, (_, index) => lengthForArray[0] + index);


  const finalArray = lengthForArray.reduce((acc, num) => acc + num, 0);
  const finalRest = lengthArrayTotal.reduce((acc, num) => acc + num, 0);

  return finalRest - finalArray;
}

console.log(getLengthOfMissingArray([[1], [2, 3], [4, 5, 6], [1, 3, 5, 5, 1]]))