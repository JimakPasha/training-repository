import './math.scss';

const numberRender = () => {
  history.pushState(null, null, '/math');
  return `
    <section class="math">
      <div class="enter">
        <h3 class="enter__title">Enter math</h3>
        <input class="enter__input" type="text" />
        <button class="enter__btn">Ok</button>
      </div>
      <div class="information-number"></div>
    </section>
  `;
};

export default numberRender;
