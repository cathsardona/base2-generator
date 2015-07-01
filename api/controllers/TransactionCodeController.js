module.exports = {

  list: function(req, res) {
    var transactionCodes;
    if (req.query.type) {
      transactionCodes = _.where(Utility.getTransactionCodes(), {type: req.query.type});
    } else {
      transactionCodes = Utility.getTransactionCodes();
    }
    res.json({transactionCodes: transactionCodes});
  }

}