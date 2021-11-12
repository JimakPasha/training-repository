/* eslint-disable default-case */
const app = document.querySelector('#app');

const locationResolver = (location) => {
  switch (location) {
    case '/date':
      app.innerHTML = `
        <h1>DATE!@#!@#!@#!@</h1>
      `;
      break;
    case 'number':
      app.innerHTML = `
          <h1>NUMBER!@#!@#!@#!@</h1>
        `;
      break;
    case 'year':
      app.innerHTML = `
          <h1>YEAR!@#!@#!@#!@</h1>
        `;
      break;
  }
};

window.addEventListener('load', () => {
  const location = window.location.path;
  console.log(location);
  if (location) {
    locationResolver(location);
  }
});