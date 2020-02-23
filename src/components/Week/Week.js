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

    componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.getWeek(this.props.date);
      }
    }

    getWeek = (param) => {
      const month = [];
      const date = [];
      const years = [];
      const initial = new Date(param.getTime());
      const currentMonth = initial.getMonth();
      const currentYear = initial.getFullYear();

      for (let i = 0; i <= 6; i += 1) {
        const currentDate = initial.getDate() + i;
        const newDate = new Date(currentYear, currentMonth, currentDate);

        const first = newDate.getDate();
        const day = newDate.getMonth() + 1;
        const year = newDate.getFullYear();

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

    setName = (year, month, day, hour) => {
      if (hour) {
        return new Date(year, month, (day + 1), hour).valueOf();
      }

      return new Date(year, month, (day + 1)).valueOf();
    }

    render() {
      const { month, date, years } = this.state;

      return (
        <>
          <div className="date__heading">
            {`${date[0]} ${months[month[0]]} ${years[0]} 
            - ${date[6]} ${months[month[6]]} ${years[6]}`}
          </div>
          <table className="table table-hover">
            <thead>
              <tr className="table__row">
                <th className="table__heading-column" />
                {daysTitle.map((day, index) => (
                  <td key={day} className="table__heading-column">
                    {day}
                    <br />
                    {month[index] < 10
                      ? `${date[index]}-0${month[index]}`
                      : `${date[index]}-${month[index]}`}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {arrHours.map(hour => (
                <tr key={hour} className="table__row">
                  <th className="table__body-column">
                    {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                  </th>
                  {arrWeek.map((day, i) => (
                    <td key={day} className="table__column">
                      <Button onClick={() => {}} />
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
