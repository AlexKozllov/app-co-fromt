import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsdsError,
  addSearch,
  selectPaginationPage,
} from '../actions/mainAction';

const initialInputValue = {
  searchValue: '',
  selectValue: '',
};

const initialPagination = 1;

const inputValue = createReducer(initialInputValue, {
  [addSearch]: (state, { payload }) => ({
    ...state,
    [payload.name]: payload.value,
  }),
});

const paginationPage = createReducer(initialPagination, {
  [selectPaginationPage]: (_, { payload }) => payload,
});

const taransactions = createReducer(false, {
  [getTransactionsSuccess]: (_, { payload }) => ({ ...payload }),
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsdsError]: () => false,
});

const error = createReducer(null, {
  [getTransactionsdsError]: (_, { payload }) => payload,
  [getTransactionsRequest]: () => '',
  [getTransactionsSuccess]: () => '',
});

const mainReduser = combineReducers({
  inputValue,
  paginationPage,
  taransactions,
  error,
  loading,
});

export { mainReduser };
