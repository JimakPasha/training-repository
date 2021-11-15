import enterBlock from '../../components/enterBlock/enterBlock';
import './math.scss';

const numberRender = () => {
  history.pushState(null, null, '/math');
  return `
    <section class="math">
      ${enterBlock('number')}
    </section>
  `;
};

export default numberRender;
