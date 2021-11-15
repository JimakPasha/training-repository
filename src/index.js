import './styles.scss';

async function getDataUsers(number, type) {
  const response = await fetch(`http://numbersapi.com/${number}/${type}`);
  console.log(response);
  const json = await response.json();
  console.log(json);
  // return json.data;
}

window.addEventListener('load', () => {
  const root = document.querySelector('#root');
  root.innerHTML = `
    <section section class="home">
      <h2 class="home__title">Please choose what information you want to receive</h2>
      <div class="home__btns-wrapper">
        <a class="home__btn" id="date" href="/">Date</a>
        <a class="home__btn" id="number" href="/">Number</a>
        <a class="home__btn" id="year" href="/">Year</a>
      </div>
    </section>
  `;

  document.querySelector('#date').addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState(null, null, '/date');
    root.innerHTML = `
    <section class="date">
      <div class="enter">
        <h3 class="enter__title">Enter date</h3>
        <input class="enter__input" type="text" />
        <button class="enter__btn">Ok</button>
      </div>
    </section>
  `;
    const btnRequest = document.querySelector('.enter__btn');
    const input = document.querySelector('.enter__input');

    btnRequest.addEventListener('click', () => {
      const inputRes = input.value;
      getDataUsers(inputRes, 'date');
    });
  });

  document.querySelector('#number').addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState(null, null, '/number');
    root.innerHTML = `
      <section class="number">
        <div class="enter">
          <h3 class="enter__title">Enter number</h3>
          <input class="enter__input" type="text" />
          <button class="enter__btn">Ok</button>
        </div>
      </section>
    `;
    const btnRequest = document.querySelector('.enter__btn');
    const input = document.querySelector('.enter__input');

    btnRequest.addEventListener('click', () => {
      console.log(input.value);
    });
  });

  document.querySelector('#year').addEventListener('click', (e) => {
    e.preventDefault();
    history.pushState(null, null, '/year');
    root.innerHTML = `
      <section class="year">
        <div class="enter">
          <h3 class="enter__title">Enter year</h3>
          <input class="enter__input" type="text" />
          <button class="enter__btn">Ok</button>
        </div>
      </section>
    `;
    const btnRequest = document.querySelector('.enter__btn');
    const input = document.querySelector('.enter__input');

    btnRequest.addEventListener('click', () => {
      console.log(input.value);
    });
  });

  if (window.location.pathname === '/date') {
    root.innerHTML = `
    <section class="date">
      <div class="enter">
        <h3 class="enter__title">Enter date</h3>
        <input class="enter__input" type="text" />
        <button class="enter__btn">Ok</button>
      </div>
    </section>
  `;
  }

  if (window.location.pathname === '/number') {
    root.innerHTML = `
      <section class="number">
        <div class="enter">
          <h3 class="enter__title">Enter number</h3>
          <input class="enter__input" type="text" />
          <button class="enter__btn">Ok</button>
        </div>
      </section>
    `;
  }

  if (window.location.pathname === '/year') {
    root.innerHTML = `
    <section class="year">
      <div class="enter">
        <h3 class="enter__title">Enter year</h3>
        <input class="enter__input" type="text" />
        <button class="enter__btn">Ok</button>
      </div>
    </section>
  `;
  }

  if (window.location.pathname === '') {
    root.innerHTML = `
    <section section class="home">
      <h2 class="home__title">Please choose what information you want to receive</h2>
      <div class="home__btns-wrapper">
        <a class="home__btn" id="date" href="/">Date</a>
        <a class="home__btn" id="number" href="/">Number</a>
        <a class="home__btn" id="year" href="/">Year</a>
      </div>
    </section>
  `;
  }

});
