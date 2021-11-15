import './date.scss';

const dateRender = () => {
  history.pushState(null, null, '/date');
  return `
    <section class="date">
      <div class="enter">
        <h3 class="enter__title">Enter date</h3>
        <input class="enter__input" type="text" />
        <button class="enter__btn">Ok</button>
      </div>
      <div class="information-number"></div>
    </section>
  `;
};

export default dateRender;
