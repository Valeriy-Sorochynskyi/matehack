import React from 'react';
import './Month.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Button } from '../Button/Button';
import {
  monthNow,
  yearNow,
  daysTitle,
} from '../../utils/constants';

class Month extends React.Component {
  state = {
    daysArr: [],
  };

  componentDidMount() {
    this.setState({
      daysArr: [...this.getDaysArr(yearNow, monthNow)],
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

      while (clearArr.length <= daysTitle.indexOf(startDay) - 1) {
        clearArr.push('');
      }

      return clearArr;
    };

    const clearDayEnd = () => {
      const clearArr = [];

      while (clearArr.length <= initialDateCel
      - daysTitle.indexOf(startDay) - 1
      - currentMonth.length) {
        clearArr.push('');
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

  render() {
    const { daysArr } = this.state;
    // const { date } = this.props;

    return (
      <>
        {/* <h2>{date}</h2> */}
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
                <td className="table__cell" key={`day${day + 1}`}>
                  <Button
                    onClick={this.clickOnDay}
                    btnName={day === ''
                      ? ''
                      : `${yearNow}-${monthNow}-${(day + 1)}`}
                  >
                    <span className="badge badge-primary badge-pill">
                      { day !== '' ? day + 1 : day}
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
