import React, { useState } from 'react';
import getDataUsers from '../../services/api';
import DataNumber from '../DataNumber/DataNumber';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ButtonToHome from './ButtonToHome/ButtonToHome';
import './FormBlock.scss';

const FormBlock = (typeNumber) => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);
  const [errorRequest, setErrorRequest] = useState(false);
  const [dataNumber, setDataNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
    setError(false);
    setErrorRequest(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number === '' || !/^[0-9]+$/.test(number)) {
      setError(true);
    } else {
      getDataUsers(number, typeNumber)
        .then((data) => {
          setDataNumber(data);
        })
        .catch(() => {
          setErrorRequest(true);
        });
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="form-number">
          <h3 className="form__title">Enter {typeNumber}:</h3>
          <input
            className="form__input"
            name="form-number"
            type="text"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className="form__btn" type="submit">
          Ok
        </button>
        {error && (
          <ErrorMessage text="The field must not be empty and must contain only numbers" />
        )}
        {errorRequest && (
          <ErrorMessage text="Error, please enter another number or reboot app" />
        )}
      </form>
      <DataNumber text={dataNumber} />
      <ButtonToHome />
    </>
  );
};

export default FormBlock;
