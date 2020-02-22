import React from 'react';
import './utils/reset.css';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { currentTime } from './utils/constants';
import { Modal } from './components/Modal/Modal';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

class App extends React.Component {
  state = {
    content: 'month',
    currentDate: currentTime,
    isModalOpen: false,
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
    const { content, currentDate, isModalOpen } = this.state;

    return (
      <>
        {isModalOpen && <Modal />}
        <h1>Calendar</h1>

        <Header getContent={this.getContent} date={currentDate} />
        <Content content={content} date={currentDate} />
      </>
    );
  }
}

export default App;
