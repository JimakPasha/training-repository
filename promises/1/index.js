
// последовательная асинхронность с помощью колбэков
// он плох тем, что у нас куча вложенностей
// console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...');

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data recived', backendData);
//   }, 2000);

// }, 2000);

// ---------------------------------------------------------

console.log('Request data...');
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    }
    resolve(backendData);
  }, 2000);
});

p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      reject(data);
    }, 2000);
  })
})
.then(clientData => {
  console.log('Data recived', clientData);
  clientData.fromPromise = true;
  return clientData;
}).then(data => {
  console.log('Modified' ,data);
})
.catch(err => console.error('Error: ', err))
.finally(() => console.log('Finally'));