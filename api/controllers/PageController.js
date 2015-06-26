module.exports = {
  
  generator: function(req, res) {
    res.view('generator', {
      fileTypes: Utility.getFileTypes(),
      transactionCodes: Utility.getTransactionCodes()
    });
  }

}