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
    <div className={s.stableResponsive}>
      <table className={s.tableWrapper}>
        <thead>
          <tr>
            <th style={{ maxWidth: '93px' }}>Block number</th>
            <th style={{ maxWidth: '140px' }}>Transaction ID</th>
            <th style={{ maxWidth: '138px' }}>Sender address</th>
            <th style={{ maxWidth: '170px' }}>Recipient's address</th>
            <th style={{ maxWidth: '137px' }}>Block confirmations</th>
            <th style={{ maxWidth: '124px' }}>Date</th>
            <th style={{ maxWidth: '242px' }}>Value</th>
            <th style={{ maxWidth: '136px' }}>Transaction Fee</th>
          </tr>
        </thead>
        <tbody>
          {taransactions.map((item) => {
            return (
              <tr key={item._id}>
                <td style={{ maxWidth: '93px' }}>
                  <div className={s.dots}>{item.blockNumber}</div>
                </td>
                <td style={{ maxWidth: '140px' }}>
                  <div className={s.dots}>
                    <a>{item.transactionId}</a>
                  </div>
                </td>
                <td style={{ maxWidth: '138px' }}>
                  <div className={s.dots}>{item.senderAdress}</div>
                </td>
                <td style={{ maxWidth: '170px' }}>
                  <div className={s.dots}>{item.recipAdress}</div>
                </td>
                <td style={{ maxWidth: '137px' }}>
                  <div className={s.dots}>{item.blockConfirmations}</div>
                </td>
                <td style={{ maxWidth: '124px' }}>
                  <div className={s.dots}>{item.date}</div>
                </td>
                <td style={{ maxWidth: '242px' }}>
                  <div className={s.dots}>{item.value}</div>
                </td>
                <td style={{ maxWidth: '136px' }}>
                  <div className={s.dots}>{item.transactionFee}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaransactionTable;
