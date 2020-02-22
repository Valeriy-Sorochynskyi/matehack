import React from 'react';
import PropTypes from 'prop-types';
import './Day.css';
import { days } from '../../utils/constants';
import { Button } from '../Button/Button';

const hours = [...Array(24).keys()];

export class Day extends React.Component {
  state = {};

  render() {
    const day = this.props.date.getDay();

    return (
      <>
        <h1>{days[day]}</h1>
        <table className="table table-hover day">
          <thead>
            <tr>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {hours.map(hour => (
              <tr className="table-default">
                <td className="day__cell day__cell_first-column">
                  {hour < 10 ? `0${hour}` : `${hour}`}
                  :00
                </td>
                <td className="day__cell day__cell_second-column">
                  <Button onClick={() => {

                  }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

Day.propTypes = {
  date: PropTypes.string.isRequired,
};
