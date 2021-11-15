import './home.scss';

const homeRender = () => {
  return `
    <section section class="home">
      <h2 class="home__title">Please choose what information you want to receive</h2>
      <div class="home__btns-wrapper">
        <a class="home__btn" id="date" href="/">Date</a>
        <a class="home__btn" id="math" href="/">Number</a>
        <a class="home__btn" id="year" href="/">Year</a>
      </div>
      <div class="information-number"></div>
    </section>
  `;
};

export default homeRender;
