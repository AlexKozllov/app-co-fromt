import React from 'react';
import { useSelector } from 'react-redux';
import TransactionsForm from '../../forms/transactionsForm/TransactionsForm';
import Loader from '../../loader/Loader';
import Pagination from '../../pagination/Pagination';
import TaransactionTable from '../../taransactionTable/TaransactionTable';

import s from './userStatistics.module.scss';

const UserStatistics = () => {
  const visible = useSelector((state) => state.search.loading);
  const taransactions = useSelector((state) =>
    state.search &&
    state.search.taransactions &&
    state.search.taransactions.data &&
    state.search.taransactions.data.transactions
      ? state.search.taransactions.data.transactions
      : []
  );

  return (
    <section className={s.sectionWrapper}>
      <div className={s.contentWrapper}>
        <div className={s.container}>
          {visible ? <Loader visible={visible} /> : ''}
          <TransactionsForm />
          <TaransactionTable />
          <div>{taransactions.length !== 0 && <Pagination />}</div>
        </div>
      </div>
    </section>
  );
};

export default UserStatistics;
