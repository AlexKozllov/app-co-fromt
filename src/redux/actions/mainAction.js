import { createAction } from '@reduxjs/toolkit';

const addSearch = createAction('transactionsForm/addSearch');
const selectPaginationPage = createAction('pagination/selectPaginationPage');
const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest'
);
const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess'
);
const getTransactionsdsError = createAction(
  'transactions/getTransactionsError'
);

export {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsdsError,
  addSearch,
  selectPaginationPage,
};
