import React, { useState } from 'react';
import './FormBlock.scss';

const FormBlock = (text) => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const validationForm = () => {
    if (number === '' || !/^[0-9]+$/.test(number)) {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationForm();
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
    setError(false);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="form-number">
          <h3 className="form__title">Enter {text}:</h3>
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
          <p className="form__error-message">
            The field must not be empty and must contain only numbers
          </p>
        )}
      </form>
      <div className="information-number" />
    </>
  );
};

export default FormBlock;
