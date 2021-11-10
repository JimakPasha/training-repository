const listUsers = document.querySelector('.page__list');
const page = document.querySelector('.page');
const main = document.querySelector('.main');
const url = 'https://reqres.in/api/users';

async function getDataUsers(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json.data;
}

getDataUsers(url)
  .then(data => {
    let key;
    for (key in data) {
      listUsers.innerHTML += `
        <li class="page__list-item">
          <h4 class="page__list-title">${data[key].first_name}</h4>
          <a class="page__list-mail" href=${data[key].email}>${data[key].email}</a>
          <img class="page__list-avatar" src=${data[key].avatar} alt="avatar">
        </li>
      `;
    }
  })
  .catch(() => {
      page.innerHTML += `
      <div class="error">
        <p class="error__message">Error, can't get data from server</p>
      </div>
      `
    main.style = 'background-image: url(assets/404.jpg);'
  });
