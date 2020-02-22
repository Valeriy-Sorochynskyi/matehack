import React from 'react';
import './App.css';
import Week from './components/Week/Week';
// import { Content } from './components/Content/Content';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
// import {  };

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Week />
        <h1>Calendar</h1>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
