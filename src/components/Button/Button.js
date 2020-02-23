import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ onClick, btnClass, children }) => (
  <button
    onClick={e => onClick(e)}
    className={`table__button ${btnClass}`}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  btnClass: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.shape({}),
      PropTypes.number],
  ).isRequired,
};

Button.propTypes = {
  btnClass: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(
    [
      PropTypes.any,
      PropTypes.bool,
      PropTypes.string,
      PropTypes.shape({}),
      PropTypes.number],
  ).isRequired,
};
