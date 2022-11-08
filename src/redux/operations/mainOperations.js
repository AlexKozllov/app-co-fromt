import { searchTransactions } from '../../servises/reqToApi';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsdsError,
} from '../actions/mainAction';

const getTransactions =
  (...queryParams) =>
  async (dispatch) => {
    dispatch(getTransactionsRequest());
    try {
      const methods = await searchTransactions(...queryParams);

      dispatch(getTransactionsSuccess(methods));
    } catch (error) {
      dispatch(getTransactionsdsError(error));
    }
  };

export { getTransactions };
