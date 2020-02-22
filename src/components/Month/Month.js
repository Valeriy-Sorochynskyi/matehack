import React from 'react';
import './Month.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { Button } from '../Button/Button';
import {
  monthNow,
  yearNow,
  daysTitle,
} from '../../utils/constants';

const getDaysInMonth = (y, m) => {
  const dateThisMonth = new Date(y, m - 1, 1);
  const dateNextMonth = m === 12
    ? new Date(y + 1, 0, 1)
    : new Date(y, m, 1);

  return Math.round((dateNextMonth - dateThisMonth) / 1000 / 3600 / 24);
};

const startDay = new Date(yearNow, monthNow - 1, 1).toLocaleString('en', {
  weekday: 'short',
});

const initialDate = getDaysInMonth(yearNow, monthNow);
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

class Month extends React.Component {
  state = {
    daysArr: days,
  };

  render() {
    const { daysArr } = this.state;

    return (
      <>
        <div>{getDaysInMonth(yearNow, monthNow)}</div>
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
                  <Button>
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
