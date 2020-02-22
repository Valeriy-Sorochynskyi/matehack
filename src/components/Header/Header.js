import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { Tabs } from '../Tabs/Tabs';
import { Pagination } from '../Pagination/Pagination';

export class Header extends React.Component {
  state = {};

  render() {
    const { getContent } = this.props;

    return (
      <header className="header">
        <Pagination />
        <Tabs getContent={getContent} />
      </header>
    );
  }
}

Header.propTypes = {
  getContent: PropTypes.func.isRequired,
};
