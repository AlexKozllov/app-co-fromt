import { createAction } from "@reduxjs/toolkit";

const payMethodsRequest = createAction("mainPage/payMethodsRequest");
const payMethodsSuccess = createAction("mainPage/payMethodsSuccess");
const payMethodsError = createAction("mainPage/payMethodsError");

export { payMethodsRequest, payMethodsSuccess, payMethodsError };
