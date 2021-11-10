// 2. Написать функцию getResolvedPromise(value), которая возвращает зарезолвленный промис с значением value. Вызвать эту функцию со значением 500. Обработать вызов в then. Если придёт значение больше 300, то выбросить через throw ошибку c текстом ‘Ошибка’. Поймать ошибку через catch и вывести в консоль текст ошибки. Ниже описать finally, который будет выводить в консоль текст ‘This is Finally!’

const getResolvedPromise = (value) => new Promise((resolve, reject) => {
    resolve(value);
}).then()

console.log(getResolvedPromise(500));