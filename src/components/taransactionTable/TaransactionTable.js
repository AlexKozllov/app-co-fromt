import React from 'react';
import { useSelector } from 'react-redux';
import s from './taransactionTable.module.scss';

const TaransactionTable = () => {
  const taransactions = useSelector((state) =>
    state.search &&
    state.search.taransactions &&
    state.search.taransactions.data &&
    state.search.taransactions.data.transactions
      ? state.search.taransactions.data.transactions
      : []
  );

  return (
    <table className={s.tableWrapper}>
      <thead>
        <tr>
          <th>Block number</th>
          <th>Transaction ID</th>
          <th>Sender address</th>
          <th>Recipient's address</th>
          <th>Block confirmations</th>
          <th>Date</th>
          <th>Value</th>
          <th>Transaction Fee</th>
        </tr>
      </thead>
      <tbody>
        {taransactions.map((item) => {
          return (
            <tr key={item._id}>
              <td>
                <div className={s.dots}>{item.blockNumber}</div>
              </td>
              <td>
                <div className={s.dots}>
                  <a>{item.transactionId}</a>
                </div>
              </td>
              <td>
                <div className={s.dots}>{item.senderAdress}</div>
              </td>
              <td>
                <div className={s.dots}>{item.recipAdress}</div>
              </td>
              <td>
                <div className={s.dots}>{item.blockConfirmations}</div>
              </td>
              <td>
                <div className={s.dots}>{item.date}</div>
              </td>
              <td>
                <div className={s.dots}>{item.value}</div>
              </td>
              <td>
                <div className={s.dots}>{item.transactionFee}</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaransactionTable;
