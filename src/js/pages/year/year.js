import enterBlock from '../../components/enterBlock/enterBlock';
import './year.scss';

const yearRender = () => {
  history.pushState(null, null, '/year');
  return `
    <section class="year">
      ${enterBlock('year')}
    </section>
  `;
};

export default yearRender;
