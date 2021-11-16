import React from 'react';
import './EnterBlock.scss';

const EnterBlock = (text) => {
  return (
    <>
      <div className="enter">
        <h3 className="enter__title">Enter {text}</h3>
        <input className="enter__input" type="text" />
        <button className="enter__btn" type="submit">
          Ok
        </button>
      </div>
      <div className="information-number" />
    </>
  );
};

export default EnterBlock;
