import React from 'react';
import PropTypes from 'prop-types';

export class Pagination extends React.Component {
  state = {};

  render() {
    const { goNext, goPrev, goToday } = this.props;

    return (
      <div>
        <button type="button" onClick={goPrev} className="btn btn-info">
          Prev
        </button>
        <button type="button" onClick={goToday} className="btn btn-info">
          Today
        </button>
        <button type="button" onClick={goNext} className="btn btn-info">
          Next
        </button>
      </div>
    );
  }
}

Pagination.propTypes = {
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
  goToday: PropTypes.func.isRequired,
};
