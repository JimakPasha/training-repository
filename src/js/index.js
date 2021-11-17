import locationResolver from './services/locationResolver';
import '../styles/global.scss';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  locationResolver(window.location.pathname, root);
});
