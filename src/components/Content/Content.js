import React from 'react';
import Proptypes from 'prop-types';
import Month from '../Month/Month';
import { Day } from '../Day/Day';
import Week from '../Week/Week';

export class Content extends React.Component {
  state = {}

  render() {
    const { content, date, openModal } = this.props;

    return (
      <div className="container">
        {content === 'day' && <Day date={date} openModal={openModal} />}
        {content === 'month' && <Month date={date} openModal={openModal} />}
        {content === 'week' && <Week date={date} openModal={openModal} />}
      </div>
    );
  }
}

Content.propTypes = {
  openModal: Proptypes.func.isRequired,
  content: Proptypes.string.isRequired,
  date: Proptypes.shape({}).isRequired,
};
