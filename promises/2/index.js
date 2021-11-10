const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

sleep(2000).then(() => console.log('After 2 seconds'));
sleep(3000).then(() => console.log('After 3 seconds'));

// --------------------------------------------------------

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// метод all. данный промис выполнится, когда завершаться все промисы в массиве
// полезен, когда нам нужно поодождать с разных серверов какие-то данные
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises');
});

// --------------------------------------------------------

// race. противоположность all
// как только один отработает, тогда отработает этот промис

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises');
});