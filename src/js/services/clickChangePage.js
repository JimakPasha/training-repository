import request from './request';
import mathRender from '../pages/math/math';
import yearRender from '../pages/year/year';
import dateRender from '../pages/date/date';

const locationCheck = (location, renderBox) => {
  switch (location) {
    case '/date':
      renderBox.innerHTML = dateRender();
      request();
      break;
    case '/math':
      renderBox.innerHTML = mathRender();
      request();
      break;
    case '/year':
      renderBox.innerHTML = yearRender();
      request();
      break;
    default:
      break;
  }
};

const clickChangePage = () => {
  document.querySelector('.home__btns-wrapper').addEventListener('click', (e) => {
    const pageName = e.target.id;
    e.preventDefault();
    locationCheck(`/${pageName}`, document.querySelector('#root'));
  });
};

export default clickChangePage;
