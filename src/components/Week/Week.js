import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { daysTitle } from '../../utils/constants';

import './Week.css';

const arrWeek = [ ...Array(7).keys() ];
const arrHours = [ ...Array(24).keys() ];

class Week extends React.Component {
    state = {};

  render() {
    return (
        <table className="table table-hover">
        <thead>
          <tr className="table__row">
            <th className="table__heading-column"></th>
            {daysTitle.map(day => (
              <td key={day} className="table__heading-column">{day}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="table__row">
            <th className="table__body-column">All days</th>
            {arrWeek.map(day => (
              <td key={day} className="table__column">
                <button className="table__button"></button>
              </td>
            ))}
          </tr>
          {arrHours.map(hour => (
            <tr className="table__row">
              <th className="table__body-column">{hour < 10 ? `0${hour}:00` : `${hour}:00`}</th>
              {arrWeek.map(day => (
                <td key={day} className="table__column">
                  <button className="table__button"></button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> 
    );
  }
}

export default Week;