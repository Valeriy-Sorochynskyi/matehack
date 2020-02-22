import React from 'react';
import './App.css';
// import { Content } from './components/Content/Content';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

class App extends React.Component {
  state = {
    content: 'month',
  };

  getContent = (event) => {
    const { name } = event.target;

    switch (name) {
      case 'day': {
        this.setState({
          content: 'day',
        });
        break;
      }

      case 'month': {
        this.setState({
          content: 'month',
        });
        break;
      }

      case 'week': {
        this.setState({
          content: 'week',
        });
        break;
      }

      default: break;
    }
  }

  render() {
    const { content } = this.state;

    return (
      <>
        <h1>Calendar</h1>
        <Header getContent={this.getContent} />
        <Content content={content} />
      </>
    );
  }
}

export default App;
