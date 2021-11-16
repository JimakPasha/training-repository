import React from 'react';
import ButtonToHome from '../../components/FormBlock/ButtonToHome/ButtonToHome';
import './ErrorPage.scss';

const Date = () => {
  return (
    <section className="errorPage">
      <h4 className="errorPage__title">Ooops... 404 error</h4>
      <p className="errorPage__text">This page does not exist</p>
      <ButtonToHome />
    </section>
  );
};

export default Date;
