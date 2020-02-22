import React from 'react';
import './utils/reset.css';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { currentTime } from './utils/constants';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

class App extends React.Component {
  state = {
    content: 'month',
    currentDate: currentTime,
  };

  getContent = (event) => {
    const { name } = event.target;

    this.setState({
      content: name,
    });
  }

  render() {
    const { content, currentDate } = this.state;

    return (
      <>
        <h1>Calendar</h1>
        <Header getContent={this.getContent} date={currentDate} />
        <Content content={content} date={currentDate} />
      </>
    );
  }
}

export default App;
