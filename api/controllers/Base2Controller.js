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
      uploadToS3: ['createFileContent', function(callback, results) {
        console.log(results.createFileContent);
        var key = getFilename(req.body.type);
        var _s3Service = new S3Service();
        _s3Service.initialize();
        _s3Service.upload(results.createFileContent, key, function(err, result) {
          callback(err, result);
        });
      }]
    }, function(err, result) {
      console.log('err', err);
      console.log('result', result);
      res.ok();
    });
  }

};

function getTransactionLine(transaction) {
  var transCode = transaction.transCode;
  var transCompSeqNum = transaction.transCompSeqNum;
  switch (transCode) {
    case '90':
      return Base2File.createHeaderIncomingCTF(transaction);
      break;
    case ('05' || '06' || '07' || '15' || '16' || '17'):
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
    case ('91' || '92'):
      return Base2File.createTrailer(transaction);
      break;
    default:
      return '';
      break;
  }
};

function getFilename(type) {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  var date = year + month + day;

  switch(type) {
    case 'First Presentment': 
      return sails.config.s3.path + '1st Presentment/EPBIIOUT' + date + '.ctf';
    case 'Chargeback':
      return sails.config.s3.path + 'Chargeback/EPIN.txt';
      break;
    case 'Representment':
      return sails.config.s3.path + 'Representment/EPBIIOUT' + date + '.ctf';
      break;
    default:
      return sails.config.s3.path + 'invalidType.txt';
      break;
  }
}