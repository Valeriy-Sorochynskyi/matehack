import React from 'react';

export class Pagination extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <button type="button" className="btn btn-info">
          Prev
        </button>
        <button type="button" className="btn btn-info">
          Next
        </button>
        <button type="button" className="btn btn-info">
          Today
        </button>
      </div>
    );
  }
}
