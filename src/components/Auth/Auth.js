import React from 'react';
import style from './Auth.module.scss';

const Auth = ({ setAuthed }) => {
  return (
    <div className={style.auth}>
      <div className={style.auth__container}>
        <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="" />
        <button className={style.auth__btn} onClick={() => setAuthed(true)}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Auth;
