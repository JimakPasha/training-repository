// async function getResponse() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//   const json = await response.json();
//   const content = json.splice(0, 5); 
  
//   const list = document.querySelector('#list');
//   let key;

//   for (key in content) {
//     list.innerHTML += `
//       <li>
//         <h4>${content[key].title}</h4>
//         <img src=${content[key].url} alt='photo'>
//       </li>
//     `
//   }

// }


// getResponse();


// -----------------------------------

const list = document.querySelector('#list');


async function getResponse() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const content = await response.json();
  return content.splice(0, 5);
}
  
getResponse()
  .then(data => {
    let key;
    for (key in data) {
      list.innerHTML += `
        <li>
          <h4>${data[key].title}</h4>
          <img src=${data[key].url} alt='photo'>
        </li>
      `
    }
  })
  .catch(err => console.log(`Error: ${err}`));