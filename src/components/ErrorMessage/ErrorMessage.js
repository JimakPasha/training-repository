import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({ text }) => {
  return <p className="error-message">{text}</p>;
};

export default ErrorMessage;
