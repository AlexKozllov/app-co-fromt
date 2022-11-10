import React from 'react';
import s from './Loader.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner/dist/loader/Grid';

const Loader = ({ visible }) => {
  return (
    <div className={s.modalLoader}>
      <div className={s.loader}>
        <Grid
          height="80"
          width="80"
          color="#3a80ba"
          ariaLabel="grid-loading"
          radius={12.5}
          wrapperStyle={{}}
          wrapperClass=""
          visible={visible}
        />
      </div>
    </div>
  );
};

export default Loader;
