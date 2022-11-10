import React, { useEffect, useState } from 'react';
import s from './pagination.module.scss';
import sprite from '../../sprites/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectPaginationPage } from '../../redux/actions/mainAction';
import { getTransactions } from '../../redux/operations/mainOperations';

const Pagination = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const { inputValue, paginationPage } = search;

  const [pageRange, setPageRange] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    dispatch(
      getTransactions(
        inputValue.searchValue,
        inputValue.selectValue,
        paginationPage,
        14
      )
    );
  }, [paginationPage]);

  const onHandleSelectPage = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(selectPaginationPage(value));
  };

  const onHandleDecRange = () => {
    if (pageRange[0] === 1) return;
    setPageRange(() => {
      return pageRange.map((item) => {
        item = item - 1;
        return item;
      });
    });
  };

  const onHandleIncRange = () => {
    setPageRange(() => {
      return pageRange.map((item) => {
        item = item + 1;
        return item;
      });
    });
  };

  return (
    <div className={s.wrapper}>
      <button type="button" className={s.pageChange} onClick={onHandleDecRange}>
        <svg
          className={`${s.buttonIconInc} ${
            pageRange[0] === 1 && s.arrowDisabled
          }`}
        >
          <use href={sprite + '#Line10'} />
        </svg>
      </button>
      <ul className={s.paginationBtn}>
        {pageRange.map((item) => {
          return (
            <li key={item}>
              <button
                type="button"
                className={s.paginationItem}
                onClick={onHandleSelectPage}
                value={item}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" className={s.pageChange} onClick={onHandleIncRange}>
        <svg className={s.buttonIconDec}>
          <use href={sprite + '#Line9'} />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
