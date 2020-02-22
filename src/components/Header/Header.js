import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { Tabs } from '../Tabs/Tabs';
import { Pagination } from '../Pagination/Pagination';

export class Header extends React.Component {
  state = {};

  render() {
    const { getContent } = this.props;

    return (
      <header className="header">
        <Pagination />
        <span>Fabruary 2020</span>
        <Tabs getContent={getContent} />
      </header>
    );
  }
}

Header.propTypes = {
  getContent: PropTypes.func.isRequired,
};
