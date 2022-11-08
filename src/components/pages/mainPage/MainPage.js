import React from 'react';
import { Link } from 'react-router-dom';
import s from './mainPage.module.scss';

const MainPage = () => {
  return (
    <div>
      <nav className={s.navigation}>
        <Link to={'/userStatistics'} className={s.userStatistics}>
          Go to UserStatistics
        </Link>
      </nav>
    </div>
  );
};

export default MainPage;
