import './year.scss';

const yearRender = () => {
  history.pushState(null, null, '/year');
  return `
    <section class="year">
      <div class="enter">
        <h3 class="enter__title">Enter year</h3>
        <input class="enter__input" type="text" />
        <button class="enter__btn">Ok</button>
      </div>
      <div class="information-number"></div>
    </section>
  `;
};

export default yearRender;
