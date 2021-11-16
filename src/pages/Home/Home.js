import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <h2 className="home__title">
        Please choose what information you want to receive
      </h2>
      <div className="home__btns-wrapper">
        <NavLink className="home__btn" id="date" exact to="/date">
          Date
        </NavLink>
        <NavLink className="home__btn" id="math" exact to="/math">
          Number
        </NavLink>
        <NavLink className="home__btn" id="year" exact to="/year">
          Year
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
