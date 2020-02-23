import React from 'react';
import './utils/reset.css';
import './App.css';
// eslint-disable-next-line import/no-unresolved
import 'bootswatch/dist/lux/bootstrap.min.css';
import { currentTime } from './utils/constants';
import { Modal } from './components/Modal/Modal';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

class App extends React.Component {
  state = {
    content: 'month',
    currentDate: currentTime,
    isModalOpen: true,
  };

  getContent = (event) => {
    const { name } = event.target;

    this.setState({
      content: name,
    });
  }

  goNext = () => {
    const { currentDate, content } = this.state;
    const year = currentDate.getFullYear();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();

    switch (content) {
      case 'month': {
        const nextMonth = new Date(currentDate.getTime()).getMonth() + 1;

        this.setState({
          currentDate: new Date(year, nextMonth, date),
        });
      }

        break;

      case 'week': {
        const nextWeek = new Date(currentDate.getTime()).getDate() + 7;

        this.setState({
          currentDate: new Date(year, month, nextWeek),
        });
      }

        break;

      case 'day': {
        const nextDay = new Date(currentDate.getTime()).getDate() + 1;

        this.setState({
          currentDate: new Date(year, month, nextDay),
        });
      }

        break;

      default: break;
    }
  }

  goPrev = () => {
    const { currentDate, content } = this.state;
    const year = currentDate.getFullYear();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();

    switch (content) {
      case 'month': {
        const nextMonth = new Date(currentDate.getTime()).getMonth() - 1;

        this.setState({
          currentDate: new Date(year, nextMonth, date),
        });
      }

        break;

      case 'week': {
        const nextWeek = new Date(currentDate.getTime()).getDate() - 7;

        this.setState({
          currentDate: new Date(year, month, nextWeek),
        });
      }

        break;

      case 'day': {
        const nextDay = new Date(currentDate.getTime()).getDate() - 1;

        this.setState({
          currentDate: new Date(year, month, nextDay),
        });
      }

        break;

      default: break;
    }
  }

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  goToday = () => {
    this.setState({
      currentDate: new Date(),
    });
  }

  render() {
    const { content, currentDate, isModalOpen } = this.state;

    return (
      <>
        {isModalOpen && <Modal />}
        <h1>Calendar</h1>

        <Header
          getContent={this.getContent}
          date={currentDate}
          goNext={this.goNext}
          goPrev={this.goPrev}
          goToday={this.goToday}
        />
        <Content content={content} date={currentDate} />
        {isModalOpen && <Modal onClose={this.handleModalClose} />}
      </>
    );
  }
}

export default App;
