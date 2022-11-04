import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
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

const loading = createReducer(false, {
  [payMethodsRequest]: () => true,
  [payMethodsSuccess]: () => false,
  [payMethodsError]: () => false,
});

const error = createReducer(null, {
  [payMethodsError]: (_, { payload }) => payload,
  [payMethodsRequest]: () => '',
  [payMethodsSuccess]: () => '',
});

const mainReduser = combineReducers({
  inputValue,
  paginationPage,
  error,
  loading,
});

export { mainReduser };
