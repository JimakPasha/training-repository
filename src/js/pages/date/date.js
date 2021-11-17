import enterBlock from '../../components/enterBlock/enterBlock';
import './date.scss';

const dateRender = () => {
  history.pushState(null, null, '/date');
  return `
    <section class="date">
    ${enterBlock('date')}
    </section>
  `;
};

export default dateRender;
