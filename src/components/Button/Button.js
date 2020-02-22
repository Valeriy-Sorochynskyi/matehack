import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ onClick, btnName, children }) => (
  <button
    onClick={onClick}
    className="table__button"
    type="button"
    name={btnName}
  >
    {children}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.shape({}),
      PropTypes.number],
  ).isRequired,
};
