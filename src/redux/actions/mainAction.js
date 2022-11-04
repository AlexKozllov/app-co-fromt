import { createAction } from '@reduxjs/toolkit';

const addSearch = createAction('transactionsForm/addSearch');
const selectPaginationPage = createAction('pagination/selectPaginationPage');
const payMethodsRequest = createAction('mainPage/payMethodsRequest');
const payMethodsSuccess = createAction('mainPage/payMethodsSuccess');
const payMethodsError = createAction('mainPage/payMethodsError');

export {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  addSearch,
  selectPaginationPage,
};
