import React from 'react';
import './Month.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
// import { Content } from './components/Content/Content';

const currentTime = new Date();
const monthNow = currentTime.getMonth() + 1;
const yearNow = currentTime.getFullYear();
const monthes = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const daysTitle = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDaysInMonth = (y, m) => {
  const dateThisMonth = new Date(y, m - 1, 1);
  const dateNextMonth = m === 12
    ? new Date(y + 1, 0, 1)
    : new Date(y, m, 1);

  return Math.round((dateNextMonth - dateThisMonth) / 1000 / 3600 / 24);
};

class Month extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div>{yearNow}</div>
        <div>{monthNow}</div>
        <table className="table table-hover">
          <thead>
            <tr className="table-secondary">
              {daysTitle.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table-active">
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Month;
