import React from 'react';
import Proptypes from 'prop-types';
import Month from '../Month/Month';
import { Day } from '../Day/Day';
import Week from '../Week/Week';

export class Content extends React.Component {
  state = {}

  render() {
    const { content } = this.props;

    return (
      <div className="container">
        {content === 'day' && <Day />}
        {content === 'month' && <Month />}
        {content === 'week' && <Week />}
      </div>
    );
  }
}

Content.propTypes = {
  content: Proptypes.string.isRequired,
};
