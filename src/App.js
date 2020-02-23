import React from 'react';
import './utils/reset.css';
import './App.css';
// eslint-disable-next-line import/no-unresolved
import 'bootswatch/dist/lux/bootstrap.min.css';
import { currentTime, todos } from './utils/constants';
import { Modal } from './components/Modal/Modal';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

class App extends React.Component {
  state = {
    content: 'month',
    currentDate: currentTime,
    isModalOpen: false,
    // title: '',
    todoList: [...todos],

    // targetId: '',
  };

  // componentDidMount() {
  //   this.setState({
  //     todos: tasks,
  //   });
  // }

  // changeHandler = ({ target }) => {
  //   this.setState({ title: target.value });
  // }

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

  clickOnDay = (e) => {
    if (e.target.localName !== 'button') {
      return;
    }

    this.setState({
      isModalOpen: true,
      // targetId: e.target.name,
    });
  }

  createEvent = (e) => {
    e.preventDefault();
  }

  goToday = () => {
    this.setState({
      currentDate: new Date(),
    });
  }

  render() {
    const { content, currentDate, isModalOpen, todoList } = this.state;

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
        <Content
          content={content}
          date={currentDate}
          openModal={this.clickOnDay}
          todoList={todoList}
        />
        {isModalOpen && (
          <Modal
            onClose={this.handleModalClose}
            onSave={this.createEvent}
          />
        )}
      </>
    );
  }
}

export default App;
