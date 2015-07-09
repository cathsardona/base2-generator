module.exports = {

  create: function(req, res) {
    console.log(JSON.stringify(req.body));
    var transactions = req.body.transactions;
    var data = '';

    async.auto({
      createFileContent: function(callback) {
        async.eachSeries(transactions, function(transaction, done) {
          data += getTransactionLine(transaction);
          done();
        }, function() {
          callback(null, data);
        });
      },
      saveFile: ['createFileContent', function(callback, results) {
        console.log(results.createFileContent);
        callback();
      }],
      uploadToS3: ['saveFile', function(callback) {
        callback();
      }]
    }, function(err, result) {
      res.ok();
    });
  }

};

function getTransactionLine(transaction) {
  var transCompSeqNum = transaction.transCompSeqNum;
  switch (transCompSeqNum) {
    case '0': 
      return Base2File.createTCR0(transaction);
      break;
    case '1':
      return Base2File.createTCR1(transaction);
      break;
    case '5':
      return Base2File.createTCR5(transaction);
      break;
    default:
      return '';
      break;
  }
};