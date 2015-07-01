var FILE_TYPES = [
  {
    id: '01',
    name: '1st Presentment'
  },
  {
    id: '02',
    name: 'Chargeback'
  },
  {
    id: '03',
    name: 'Representment'
  }
];

var TRANSACTION_CODES = require('../../data/TransactionCodes.json');

module.exports = {

  getFileTypes: function() {
    return FILE_TYPES;
  },

  getTransactionCodes: function(fileType) {
    return TRANSACTION_CODES;
  }

};