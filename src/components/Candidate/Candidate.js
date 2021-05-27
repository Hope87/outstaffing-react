import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './Candidate.module.scss';
// import { candidatesList } from '../Home/sections/Description';
import icon from '../../images/front_end.png';
import arrow from '../../images/right-arrow.png';
import rectangle from '../../images/rectangle_secondPage.png';
import Sidebar from './sections/Sidebar';
import classes from './Candidate.module.scss';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import SectionFour from './sections/SectionFour';
import SectionFive from './sections/SectionFive';
import SectionSkills from './sections/SectionSkills';

const Candidate = () => {
  const history = useHistory();

  // const { id: candidateId } = useParams();

  // const currentCandidate = candidatesList.find((el) => el.id === Number(candidateId));

  return (
    <section className={classes.candidate}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style.candidate__title}>
              <h2>
                <span>Аутстаффинг</span> it-персонала
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className={style.candidate__header}>
              <div className={style.arrow} onClick={() => history.push('/')}>
                <img src={arrow} alt="" />
                <span>Вернуться к списку</span>
              </div>

              <div className="icon">
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.candidate__main}>
          <div className="row">
            <div className="col-4">
              <Sidebar />
            </div>

            <div className="col-8">
              <div className={style.candidate__main__description}>
                <h2>Frontend разработчик, Middle</h2>
                <img src={rectangle} alt="" />
                <p># Описание опыта</p>
                <SectionOne />
                <p># Средства и инструменты:</p>
                <SectionTwo />
                <p># Описание опыта</p>
                <SectionThree />
                <p># Средства и инструменты:</p>
                <SectionFour />
                <p># Функционал:</p>
                <SectionFive />
                <SectionSkills />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>
        Candidate name: <span>{currentCandidate.name}</span>
      </h1> */}
    </section>
  );
};

export default Candidate;
