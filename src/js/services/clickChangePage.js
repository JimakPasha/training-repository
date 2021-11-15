import locationResolver from './locationResolver';

const clickChangePage = () => {
  document.querySelector('.home__btns-wrapper').addEventListener('click', (e) => {
    const pageName = e.target.id;
    e.preventDefault();
    locationResolver(`/${pageName}`, document.querySelector('#root'));
  });
};

export default clickChangePage;
