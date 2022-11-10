import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSearch,
  selectPaginationPage,
} from '../../../redux/actions/mainAction';
import { getTransactions } from '../../../redux/operations/mainOperations';
import sprite from '../../../sprites/sprite.svg';
import s from './transactionsForm.module.scss';

const TransactionsForm = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions('', '', 1, 14));
  }, [dispatch]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    dispatch(addSearch({ name, value }));
  };

  const onHandleSearch = (e) => {
    const { inputValue, paginationPage } = search;
    e.preventDefault();

    dispatch(
      getTransactions(
        inputValue.searchValue,
        inputValue.selectValue,
        paginationPage,
        14
      )
    );
    dispatch(selectPaginationPage(1));
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.formContainer} onSubmit={onHandleSearch}>
        <div className={s.inputContainer}>
          <input
            type="text"
            name="searchValue"
            className={s.inputSearch}
            value={search.inputValue.searchValue}
            placeholder="Search..."
            onChange={onHandleChange}
          />
          <div className={s.separator}></div>
          <select
            name="selectValue"
            className={s.selectSearch}
            onChange={onHandleChange}
            value={search.inputValue.selectValue}
          >
            <option value="">Show All</option>
            <option value="senderAdress">Sender address</option>
            <option value="recipAdress">Recipient address</option>
            <option value="transactionId">Transaction id</option>
            <option value="blockNumber">Block number</option>
          </select>
        </div>
        <div className={s.search}>
          <input type="submit" value="" className={s.inputSubmit}></input>
          <svg className={s.searchIcon}>
            <use href={sprite + '#loupe_icon'} />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default TransactionsForm;
