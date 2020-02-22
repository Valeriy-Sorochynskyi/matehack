import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {}

  render() {
    const { getContent } = this.props;

    return (
      <div>
        <button
          onClick={getContent}
          name="month"
          type="button"
          className="btn btn-info"
        >
            Month
        </button>
        <button
          onClick={getContent}
          name="week"
          type="button"
          className="btn btn-info"
        >
            Week
        </button>
        <button
          onClick={getContent}
          name="day"
          type="button"
          className="btn btn-info"
        >
            Day
        </button>
      </div>
    );
  }
}

Tabs.propTypes = {
  getContent: PropTypes.func.isRequired,
};
