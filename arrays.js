//???// 1. Создайте массив из 10 чисел. Найдите количество
// элементов массива, которые отличны от
// наибольшего не более чем на 10%.

const randomNumbersArr1 = [4, 50, 3, 85, -90, 33, 346, -193, 35, 33];
const randomNumbersArr2 = [-8, 94, 1, 8, 1, 46, 1, 318, -1000, -102];

const findAmountNumbersDiffer = () => {

}

// 2. Создайте массив из 10 чисел. Найдите и выведите на
// экран наименьший четный элемент массива.

const randomNumbersArr3 = [9, 450, 33, -85, 90, 33, 7891, -193, 3, 33];
const randomNumbersArr4 = [-10, 8, 7, 88, 100, 6, 12, 18, -100, -102];

const findLeastEven = (arr) =>
  arr.filter((item) => item % 2 === 0).sort((a, b) => a - b)[0];

console.log(findLeastEven(randomNumbersArr3));
console.log(findLeastEven(randomNumbersArr4));

// 3. Создать массив из 10 чисел. Среди элементов с
// нечетными номерами найдите наибольший элемент
// массива, который делится на 3.

const randomNumbersArr5 = [10, 450, -33, -1, 90, 0, 14234534, 8, 33, 3];
const randomNumbersArr6 = [342, 8, -234, 88, 0, 6, 12, -1, -945, -1];

const findLagerOddDivideThree = (arr) =>
  arr
    .filter((item) => item % 2 && item % 3 === 0)
    .sort((a, b) => a - b)
    .reverse()[0];

console.log(findLagerOddDivideThree(randomNumbersArr5));
console.log(findLagerOddDivideThree(randomNumbersArr6));

// 4. Дан массив и число n. Найдите число в массиве,
// которое наиболее близко к числу n.

const randomNumbersArr7 = [1, 4, -33, -1, 543, 0, 1444, 855, 54, 23];
const randomNumbersArr8 = [12, -8, -4, 12, 4, 6, 93, 88, 54, -5];

const number1 = 12;
const number2 = -3;

const findNearlyNumber = (arr, number) => {
  let arrDifferences = [];
  arr.map((item) =>
    item < number
      ? arrDifferences.push(number - item)
      : arrDifferences.push(item - number)
  );
  return number - arrDifferences.sort((a, b) => a - b)[0];
};

console.log(findNearlyNumber(randomNumbersArr7, number1));
console.log(findNearlyNumber(randomNumbersArr8, number2));
