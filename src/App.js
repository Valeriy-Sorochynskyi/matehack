import React from 'react';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
// import {  };

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <h1>Calendar</h1>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
