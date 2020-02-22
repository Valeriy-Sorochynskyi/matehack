import React from 'react';
// import Proptypes from 'prop-types';
import Month from '../Month/Month';

export class Content extends React.Component {
  state = {}

  render() {
    return (
      <div className="container">
        <Month />
      </div>
    );
  }
}
