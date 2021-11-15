import request from './request';
import homeRender from '../pages/home/home';
import mathRender from '../pages/math/math';
import yearRender from '../pages/year/year';
import dateRender from '../pages/date/date';
import clickChangePage from './clickChangePage';

const locationResolver = (location, renderBox) => {
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
      renderBox.innerHTML = homeRender();
      clickChangePage();
      break;
  }
};

export default locationResolver;
