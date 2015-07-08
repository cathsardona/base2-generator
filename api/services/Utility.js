var FILE_TYPES = require('../../data/FileTypes.json');
var TRANSACTION_CODES = require('../../data/TransactionCodes.json');

module.exports = {

  getFileTypes: function() {
    return FILE_TYPES;
  },

  getTransactionCodes: function(fileType) {
    return TRANSACTION_CODES;
  }

};