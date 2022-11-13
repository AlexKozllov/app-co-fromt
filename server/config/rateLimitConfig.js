const rateLimit = require('express-rate-limit');
const { HttpCode } = require('../helpers/constants');
const { ErrorHandler } = require('../helpers/errorHandler');

const rateLimitConfig = rateLimit({
  windowMs: 90000,
  max: 100,
  handler: (req, res, next) => {
    next(
      new ErrorHandler(
        HttpCode.BAD_REQUEST,
        'API access limit exceeded. Try to lete'
      )
    );
  },
});

module.exports = { rateLimitConfig };
