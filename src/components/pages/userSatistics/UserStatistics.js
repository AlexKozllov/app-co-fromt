import React from 'react';
import { useSelector } from 'react-redux';
import TransactionsForm from '../../forms/transactionsForm/TransactionsForm';
import Loader from '../../loader/Loader';
import Pagination from '../../pagination/Pagination';
import TaransactionTable from '../../taransactionTable/TaransactionTable';

import s from './userStatistics.module.scss';

const UserStatistics = () => {
  const visible = useSelector((state) => state.search.loading);

  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        {visible ? <Loader visible={visible} /> : ''}
        <TransactionsForm />
        <TaransactionTable />
        <div>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default UserStatistics;
