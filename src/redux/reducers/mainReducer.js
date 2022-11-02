import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
} from "../actions/mainAction";

const initialCalculate = {
  base: "",
  amount: "",
  invoicePayMethod: 3,
  withdrawPayMethod: 6,
};

const loading = createReducer(false, {
  [payMethodsRequest]: () => true,
  [payMethodsSuccess]: () => false,
  [payMethodsError]: () => false,
});

const error = createReducer(null, {
  [payMethodsError]: (_, { payload }) => payload,
  [payMethodsRequest]: () => "",
  [payMethodsSuccess]: () => "",
});

const mainReduser = combineReducers({
  error,
  loading,
});

export { mainReduser };
