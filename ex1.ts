function solution(number: number) {
  if( number <= 0 ) return 0;
  const numberArray = Array.from({length: number - 1}, (_, index) => index + 1);

  // *Filtrar los numeros que son multiplos de 3
  const totalMultiplesOfThree = numberArray
                                  .filter(num => num % 3 === 0 || num % 5 === 0)
                                  .reduce((acc, curr) => acc + curr, 0);

  return totalMultiplesOfThree;
}

console.log(solution(10))