import React, { useEffect, useState } from 'react';
import s from './pagination.module.scss';
import sprite from '../../sprites/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectPaginationPage } from '../../redux/actions/mainAction';
import { getTransactions } from '../../redux/operations/mainOperations';

const Pagination = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const totalPageCount = useSelector((state) =>
    state.search &&
    state.search.taransactions &&
    state.search.taransactions.data &&
    state.search.taransactions.data.totalPageCount
      ? state.search.taransactions.data.totalPageCount
      : 1
  );

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
  }, [paginationPage, dispatch]);

  const onHandleSelectPage = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value === totalPageCount) return;
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
            pageRange[0] < 2 && s.arrowDisabled
          }`}
        >
          <use href={sprite + '#Line10'} />
        </svg>
      </button>
      <ul className={s.paginationBtn}>
        {pageRange.map((item) => {
          if (item <= totalPageCount) {
            return (
              <li key={item}>
                <button
                  type="button"
                  className={`${s.paginationItem} ${
                    item === +paginationPage && s.btnActive
                  }`}
                  onClick={onHandleSelectPage}
                  value={item}
                >
                  {item}
                </button>
              </li>
            );
          } else {
            return;
          }
        })}
      </ul>
      <button type="button" className={s.pageChange} onClick={onHandleIncRange}>
        <svg
          className={`${s.buttonIconDec} ${
            +paginationPage === +totalPageCount && s.arrowDisabled
          }`}
        >
          <use href={sprite + '#Line9'} />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
