import renderDataRequest from './api';

const request = () => {
  document.querySelector('.enter__btn').addEventListener('click', (e) => {
    const typeNumber = window.location.pathname.substr(1);
    console.log(typeNumber);
    const inputRes = document.querySelector('.enter__input').value;
    renderDataRequest(inputRes, typeNumber);
  });
};

export default request;
