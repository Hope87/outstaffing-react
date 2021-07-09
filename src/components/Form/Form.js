import React, { useState } from 'react';
import style from './Form.module.css';
import { fetchForm } from '../../server/server';
import arrow from '../../images/right-arrow.png';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [data, setData] = useState({
    email: '',
    phone: '',
    comment: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitData', data);

    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('comment', data.comment);

    fetchForm('https://guild.craft-group.xyz/api/profile/add-to-interview', formData);
  };

  const goBack = () => {
    history.goBack();
  };

  console.log('data', data);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className={style.form__arrow} onClick={() => goBack()}>
            <div className={style.form__arrow__img}>
              <img src={arrow} alt="" />
            </div>
            <div className={style.form__arrow__sp}>
              <span>Вернуться к кандидату</span>
            </div>
          </div>
          <form className={style.form} id="test">
            <label htmlFor="email">Емейл:</label>
            <input
              onChange={handleChange}
              id="email"
              name="Email"
              type="email"
              placeholder="Емейл"
              value={data.email}
            />

            <label htmlFor="phone">Номер телефона:</label>
            <input
              onChange={handleChange}
              id="phone"
              type="number"
              name="Phone"
              placeholder="Телефон"
              value={data.phone}
            />

            <textarea
              onChange={handleChange}
              id="comment"
              rows="5"
              cols="40"
              name="Comment"
              placeholder="Оставьте комментарий"
              value={data.comment}
            ></textarea>

            <button onClick={handleSubmit} className={style.form__btn} type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
