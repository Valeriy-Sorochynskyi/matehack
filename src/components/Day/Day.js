import React from 'react';
import './Day.css';
// import { Button } from '../Button/Button';

const hours = [...Array(24).keys()];

export class Day extends React.Component {
  state = {};

  render() {
    return (
      <table className="table table-hover day">
        <thead>
          <tr>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {hours.map(day => (
            <tr className="table-default">
              <td className="day__cell day__cell_first-column">
                {day < 10 ? `0${day}` : `${day}`}
                :00
              </td>
              <td>
                {/* <Button onClick={() => {
                  console.log('click');
                }}
                /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
