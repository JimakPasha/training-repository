import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <h2 className="home__title">
        Please choose what information you want to receive
      </h2>
      <div className="home__btns-wrapper">
        <a className="home__btn" id="date" href="/">
          Date
        </a>
        <a className="home__btn" id="math" href="/">
          Number
        </a>
        <a className="home__btn" id="year" href="/">
          Year
        </a>
      </div>
      <div className="information-number">test</div>
    </section>
  );
};

export default Home;
