import React from 'react';
import Proptypes from 'prop-types';
import Month from '../Month/Month';
import { Day } from '../Day/Day';
import Week from '../Week/Week';

export class Content extends React.Component {
  state = {}

  render() {
    const { content, date } = this.props;

    return (
      <div className="container">
        {content === 'day' && <Day date={date} />}
        {content === 'month' && <Month date={date} />}
        {content === 'week' && <Week date={date} />}
      </div>
    );
  }
}

Content.propTypes = {
  content: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
};
