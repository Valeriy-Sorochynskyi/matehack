import React from 'react';
import './Month.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import {
  months,
  daysTitle,
} from '../../utils/constants';

// const todos = [
//   {
//     id: 123456789,
//     title: 'Сelebration of the end of the hackathon 1',
//     description: 'Duis lobortis massa imperdiet quam. '
//         + 'Praesent ut ligula non mi varius sagittis.',
//   },
//   {
//     id: 123456790,
//     title: 'Сelebration of the end of the hackathon 2',
//     description: 'Duis lobortis massa imperdiet quam. '
//         + 'Praesent ut ligula non mi varius sagittis.',
//   },
//   {
//     id: 123456791,
//     title: 'Сelebration of the end of the hackathon 3',
//     description: 'Duis lobortis massa imperdiet quam. '
//         + 'Praesent ut ligula non mi varius sagittis.',
//   },
// ];

class Month extends React.Component {
  state = {
    daysArr: [],
  };

  componentDidMount() {
    const { date } = this.props;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    this.setState({
      daysArr: [...this.getDaysArr(year, month)],
    });
  }

  getDaysArr = (year, month) => {
    const getDaysInMonth = (y, m) => {
      const dateThisMonth = new Date(y, m - 1, 1);
      const dateNextMonth = m === 12
        ? new Date(y + 1, 0, 1)
        : new Date(y, m, 1);

      return Math.round((dateNextMonth - dateThisMonth) / 1000 / 3600 / 24);
    };

    const startDay = new Date(year, month - 1, 1).toLocaleString('en', {
      weekday: 'short',
    });

    const initialDate = getDaysInMonth(year, month);
    const initialDateCel = initialDate + daysTitle
      .indexOf(startDay) > 35 ? 42 : 35;
    const currentMonth = [...Array(initialDate).keys()];
    const clearDayStart = () => {
      const clearArr = [];
      let count = -1;

      while (clearArr.length <= daysTitle.indexOf(startDay) - 1) {
        clearArr.push(new Date(year, month - 1, count).getDate());
        count -= 1;
      }

      return clearArr.reverse();
    };

    const clearDayEnd = () => {
      const clearArr = [];
      let count = initialDate + 1;

      while (clearArr.length <= initialDateCel
      - daysTitle.indexOf(startDay) - 1
      - currentMonth.length) {
        clearArr.push(new Date(year, month - 1, count).getDate() - 1);
        count += 1;
      }

      return clearArr;
    };

    const days = [
      ...clearDayStart(),
      ...currentMonth,
      ...clearDayEnd(),
    ];

    return days;
  }

  clickOnDay = (e) => {
    if (e.target.localName !== 'button') {
      return;
    }

    // eslint-disable-next-line no-console
    console.dir(e.target.name);
  }

  setName = (year, month, day, hour) => {
    if (hour) {
      return new Date(year, month, (day + 1), hour).valueOf();
    }

    return new Date(year, month, (day + 1)).valueOf();
  }

  render() {
    const { daysArr } = this.state;
    const { date } = this.props;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return (
      <>
        <h2 className="title">
          {year}
          {' '}
          {months[month]}
        </h2>
        <table className="table">
          <thead>
            <tr className="table__scope">
              {daysTitle.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table__scope">
              {daysArr.map(day => (
                <td
                  className="table__cell"
                  key={`month${this.setName(year, month, day)}`}
                >
                  <Button
                    onClick={this.clickOnDay}
                    btnName={this.setName(year, month, day)}
                  >
                    <span className="badge badge-primary badge-pill">
                      {day + 1}
                    </span>
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Month;

Month.propTypes = {
  date: PropTypes.shape({
    getFullYear: PropTypes.func.isRequired,
    getMonth: PropTypes.func.isRequired,
  }).isRequired,
};
