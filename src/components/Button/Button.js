import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="table__button"
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number],
  ).isRequired,
};
