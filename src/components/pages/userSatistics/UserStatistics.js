import React from 'react';
import TransactionsForm from '../../forms/transactionsForm/TransactionsForm';
import Pagination from '../../pagination/Pagination';
import TaransactionTable from '../../taransactionTable/TaransactionTable';

import s from './userStatistics.module.scss';

const UserStatistics = () => {
  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        <TransactionsForm />
        <TaransactionTable />
        <Pagination />

        {/* </div> */}
        {/* <h1 className={s.logoWrapper}>dsfdfdf</h1> */}
      </div>
    </section>
  );
};

export default UserStatistics;
