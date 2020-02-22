import React from 'react';
// import Proptypes from 'prop-types';
import Month from '../Month/Month';
// import Week from '../Week/Week';

export class Content extends React.Component {
  state = {}

  render() {
    // const { content } = this.props;

    return (
      <div className="container">
        <Month />
      </div>
    );
  }
}
