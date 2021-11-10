// 1. Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд и который несёт значение 100. delay(1000).then(value => console.log(‘Done with ’ + value)); // Done with 100

const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(ms), ms));

delay(1000).then(value => console.log(`Done with ${value}`));
