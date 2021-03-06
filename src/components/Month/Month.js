import React from 'react';
import './Month.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import {
  months,
  daysTitle,
} from '../../utils/constants';

class Month extends React.PureComponent {
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

  componentDidUpdate(prevProps, PrevState) {
    const { date } = this.props;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (date !== prevProps.date) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        daysArr: [...this.getDaysArr(year, month)],
      });
    }
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

      return clearArr.reverse();
    };

    const clearDayEnd = () => {
      let clearArr = [];

      while (clearArr.length <= initialDateCel
      - daysTitle.indexOf(startDay) - 1
      - currentMonth.length) {
        clearArr = [
          ...clearArr,
          '',
        ];
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

  render() {
    const { daysArr } = this.state;
    const { date, openModal, todoList } = this.props;
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
              {daysArr.map((day, index) => {
                const dateOfCell = new Date(this.props.date.getTime());

                dateOfCell.setDate(day + 1);

                return (
                  <td
                    className="table__cell"
                    key={String(Math.random())}
                  >
                    {
                      day === ''
                        ? ''
                        : (
                          <Button
                            btnClass={
                              (date.getDate() === day + 1)
                                && 'day__active'
                            }
                            onClick={() => openModal(day)}
                          >
                            <span className="badge badge-primary badge-pill">
                              {day === ''
                                ? ''
                                : day + 1 }
                            </span>
                            {todoList
                              .filter(el => el.date.getFullYear()
                                    === dateOfCell.getFullYear()
                                    && el.date.getMonth()
                                    === dateOfCell.getMonth()
                                    && el.date.getDate()
                                    === dateOfCell.getDate())
                              .map(el => (
                                <span
                                  key={el.id}
                                  className="badge badge-danger  badge-pill"
                                >
                                  {el.title}
                                </span>
                              ))}
                          </Button>
                        )
                    }

                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Month;

Month.propTypes = {
  openModal: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  date: PropTypes.shape({
    getDate: PropTypes.func,
    getTime: PropTypes.func,
    openModal: PropTypes.func,
    getFullYear: PropTypes.func,
    getMonth: PropTypes.func,
  }).isRequired,
};
