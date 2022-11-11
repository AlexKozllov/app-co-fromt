import React from 'react';
import s from './footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footerWrapper}>
      <div className={s.contentWrapper}>
        <div className={s.container}>
          <p className={s.footerLogo}>AppCo</p>
          <p className={s.text}>All rights reserved by ThemeTags</p>
          <p className={s.references}>Copyrights © 2019. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
