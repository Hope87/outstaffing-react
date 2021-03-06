import React, { useState, useEffect } from 'react';
import style from './CalendarComponent.module.css';
import ellipse from '../../images/ellipse.png';
import rectangle from '../../images/rectangle__calendar.png';
import calendarIcon from '../../images/calendar_icon.png';
import moment from 'moment';
import 'moment/locale/ru';
import { calendarHelper, currentMonthAndDay } from './calendarHelper';

const CalendarComponent = () => {
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(calendarHelper(value));
  }, [value]);

  function beforeToday(day) {
    return day.isBefore(new Date(), 'day');
  }

  function isToday(day) {
    return day.isSame(new Date(), 'day');
  }

  function dayStyles(day) {
    if (beforeToday(day)) return `${style.before}`;
    if (isToday(day)) return `${style.today}`;
    if (day.day() === 6 || day.day() === 0) return `${style.selected}`;
    return '';
  }

  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }

  function nextMonth() {
    return value.clone().subtract(2, 'month');
  }

  const prevMonthFirst = () => {
    return moment().subtract(1, 'month').format('MMMM');
  };
  const prevMonthSecond = () => {
    return moment().subtract(2, 'month').format('MMMM');
  };

  return (
    <div className={style.CalendarComponent}>
      <div className={style.CalendarComponent__header}>
        <h3>Мои отчеты</h3>
        <div className={style.CalendarComponent__header__box}>
          <img src={ellipse} alt="" />
          <span onClick={() => setValue(prevMonth())}>{prevMonthFirst()}</span>
        </div>
        <div className={style.CalendarComponent__header__box}>
          <img src={ellipse} alt="" />
          <span onClick={() => setValue(nextMonth())}>{prevMonthSecond()}</span>
        </div>
      </div>

      <div className={style.CalendarComponent__rectangle}>
        <img src={rectangle} alt="" />
      </div>

      <div className={style.CalendarComponent__body}>
        <div>
          <p>Пн</p>
          <p>Вт</p>
          <p>Ср</p>
          <p>Чт</p>
          <p>Пт</p>
          <p>Сб</p>
          <p>Вс</p>
        </div>

        <div className={style.CalendarComponent__form}>
          {calendar.map((week) =>
            week.map((day) => (
              <button
                onClick={() => setValue(day)}
                key={day}
                className={dayStyles(day)}
                name={day.format('dddd')}
                id="btn"
              >
                <img className={style.calendarIcon} src={calendarIcon} alt="" />
                {currentMonthAndDay(day)}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
