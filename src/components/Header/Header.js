import React from 'react';
// import Proptypes from 'prop-types';
import './Header.css';
import { Tabs } from '../Tabs/Tabs';
import { Pagination } from '../Pagination/Pagination';

export class Header extends React.Component {
  state = {};

  render() {
    return (
      <header className="header">
        <Pagination />
        <span>Fabruary 2020</span>
        <Tabs />
      </header>
    );
  }
}
