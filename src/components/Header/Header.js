import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { Tabs } from '../Tabs/Tabs';
import { Pagination } from '../Pagination/Pagination';

export class Header extends React.Component {
  state = {};

  render() {
    const { getContent, goNext, goPrev, goToday } = this.props;

    return (
      <header className="header">
        <Pagination goNext={goNext} goPrev={goPrev} goToday={goToday} />
        <Tabs getContent={getContent} />
      </header>
    );
  }
}

Header.propTypes = {
  getContent: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
  goToday: PropTypes.func.isRequired,
};
