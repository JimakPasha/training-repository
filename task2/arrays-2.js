// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

const arr = [
  {a: 2, b: 1},
  {a: 5, b: 12},
  {a: 95, b: 7}
]

const validationArr = (arr) => {
  let checkValid = 'its valid';
  arr.map(({a, b}) => a <= b ? checkValid = 'its invalid' : null);
  console.log(checkValid);
}

validationArr(arr);

// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат

const squaringItemB = (arr) => {
  return arr.map(item => {
    return {...item, b: item.b * item.b};
  });
}

console.log(squaringItemB(arr));

// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию

const expandArrObjects = (arr) => arr.reduce((acc, {a, b}) => {acc.push(a, b); return acc}, []);

console.log(expandArrObjects(arr));