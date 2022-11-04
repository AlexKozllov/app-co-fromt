import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../../../redux/actions/mainAction';

import s from './transactionsForm.module.scss';

const TransactionsForm = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    dispatch(addSearch({ name, value }));
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.formContainer}>
        <div className={s.inputContainer}>
          <input
            type="text"
            name="searchValue"
            className={s.inputSearch}
            value={search.inputValue.search}
            placeholder="Search..."
            onChange={onHandleChange}
          />
          <div className={s.separator}></div>
          <select
            name="selectValue"
            className={s.selectSearch}
            onChange={onHandleChange}
          >
            <option value="value1">Recipient/sender address</option>
            <option value="value2">Transaction id</option>
            <option value="value3">Block number</option>
          </select>
        </div>
        <input type="submit" value="Отправить" className={s.inputSubmit} />
      </form>
    </div>
  );
};

export default TransactionsForm;
