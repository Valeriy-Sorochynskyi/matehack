import React from 'react';
// import Proptypes from 'prop-types';
import Month from '../Month/Month';
import { Day } from '../Day/Day';
import Week from '../Week/Week';

export class Content extends React.Component {
  state = {}

  render() {
    return (
      <div className="container">
        <Month />
        <Day />
        <Week />
      </div>
    );
  }
}
