import React from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.scss';

const Header = () => {
  return (
    // <div className={s['header--wrapper']}>
    <div className={s.headerWrapper}>
      <h1 className={s.logoWrapper}>
        <Link to={'/'} className={s.headerLogo}>
          AppCo
        </Link>
      </h1>
    </div>
  );
};

export default Header;
