import React from 'react';
import { Link } from 'react-router-dom';
import s from './footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footerWrapper}>
      <div className={s.container}>
        <p className={s.footerLogo}>AppCo</p>
        <p className={s.text}>All rights reserved by ThemeTags</p>
        <p className={s.references}>Copyrights © 2019. </p>
      </div>
    </div>
  );
};

export default Footer;
