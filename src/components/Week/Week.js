import React from 'react';
import Proptypes from 'prop-types';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { daysTitle, months } from '../../utils/constants';
import { Button } from '../Button/Button';

import './Week.css';

const arrWeek = [...Array(7).keys()];
const arrHours = [...Array(24).keys()];

class Week extends React.Component {
    state = {
      month: [],
      date: [],
      years: [],
    };

    componentDidMount() {
      this.getWeek(this.props.date);
    }

    getWeek = (param) => {
      const month = [];
      const date = [];
      const years = [];
      const initial = new Date(param.getTime());

      for (let i = 1; i <= 7; i += 1) {
        const first = initial.getDate() - initial.getDay() + i;
        const day = new Date(initial.setDate(first)).toISOString().slice(5, 7);
        const year = new Date(initial.setDate(first)).toISOString().slice(0, 4);

        month.push(day);
        date.push(first);
        years.push(year);
      }

      this.setState({
        month: [...month],
        date: [...date],
        years: [...years],
      });
    }

    render() {
      const { month, date, years } = this.state;

      return (
        <>
          <div className="date__heading">
            {`${date[0]} - ${date[6]} ${months[+month[6]]} ${years[6]}`}
          </div>
          <table className="table table-hover">
            <thead>
              <tr className="table__row">
                <th className="table__heading-column" />
                {daysTitle.map((day, index) => (
                  <td key={day} className="table__heading-column">
                    {day}
                    <br />
                    {`${date[index]}-${month[index]}`}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="table__row">
                <th className="table__body-column">All days</th>
                {arrWeek.map(day => (
                  <td key={day} className="table__column">
                    <Button />
                  </td>
                ))}
              </tr>
              {arrHours.map(hour => (
                <tr className="table__row">
                  <th className="table__body-column">
                    {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                  </th>
                  {arrWeek.map(day => (
                    <td key={day} className="table__column">
                      <Button />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
}

Week.propTypes = {
  date: Proptypes.instanceOf(Date).isRequired,
};

export default Week;
