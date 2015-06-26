var FILE_TYPES = [
  {
    id: '00',
    name: ''
  },
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

var TRANSACTION_CODES = {
  '01': [
    {
      code: '05',
      name: '05 (Sales Draft)'
    },
    {
      code: '06',
      name: '06 (Credit Voucher)'
    },
    {
      code: '07',
      name: '07 (Cash Disbursement)'
    },
    {
      code: '25',
      name: '25 (Sales Draft Reversal)'
    },
    {
      code: '26',
      name: '26 (Cash Voucher Reversal)'
    },
    {
      code:'27',
      name: '27 (Cash Disbursement Reversal)'
    }
  ],
  '02': [
    {
      code: '15',
      name: '15 (Sales Draft Chargeback)'
    },
    {
      code: '16',
      name: '16 (Credit Voucher Chargeback)'
    },
    {
      code: '17',
      name: '17 (Cash Disbursement Chargeback)'
    },
    {
      code: '35',
      name: '35 (Sales Draft Chargeback Reversal)'
    },
    {
      code: '36',
      name: '36 (Credit Voucher Chargeback Reversal)'
    },
    {
      code: '37',
      name: '37 (Cash Disbursement Chargeback Reversal)'
    }
  ],
  '03': [
    {
      code: '05',
      name: '05 (Sales Draft)'
    },
    {
      code: '06',
      name: '06 (Credit Voucher)'
    },
    {
      code: '07',
      name: '07 (Cash Disbursement)'
    },
    {
      code: '25',
      name: '25 (Sales Draft Reversal)'
    },
    {
      code: '26',
      name: '26 (Cash Voucher Reversal)'
    },
    {
      code:'27',
      name: '27 (Cash Disbursement Reversal)'
    }
  ]
};

module.exports = {

  getFileTypes: function() {
    return FILE_TYPES;
  },

  getTransactionCodes: function() {
    return TRANSACTION_CODES;
  }

};