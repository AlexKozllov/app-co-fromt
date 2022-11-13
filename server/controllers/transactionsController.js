const { HttpCode } = require('../helpers/constants');
const TransactionsModel = require('../models/transactions');
const { getLastBlock } = require('../services/getTransactionsData');

const getAllTransactions = async (req, res) => {
  const currentBlockNumber = await getLastBlock();
  const { searchString, filterType, page = 1, limit = 14 } = req.query;

  const options = {
    page,
    limit,
  };

  const result = await TransactionsModel.paginate(
    { [filterType]: searchString },
    options,
    await function (err, result) {
      if (err) {
        console.error(err);
      } else {
        return result;
      }
    }
  );

  res.status(HttpCode.OK).json({
    code: HttpCode.OK,
    status: 'success',
    data: {
      transactions: result.docs,
      totalPageCount: result.totalPages,
      page: result.page,
      currentBlockNumber,
    },
  });
};

module.exports = { getAllTransactions };
