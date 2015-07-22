module.exports = {

  createHeaderIncomingCTF: function(txn) {
    var data = '';
    data = txn.transCode +
      txn.processingBIN +
      txn.processingDate +
      txn.reserved1 +
      txn.settlementDate +
      txn.reserved2 +
      txn.releaseNum +
      txn.testOption +
      txn.reserved3 +
      txn.securityCode +
      txn.reserved4 +
      txn.incomingFileID +
      txn.reserved5 +
      '\n';
    return data;
  },

  createTCR0: function(txn) {
    var data = '';
    data = txn.transCode + 
      txn.transCodeQualifier + 
      txn.transCompSeqNum + 
      txn.acctNum + 
      txn.acctNumExt + 
      txn.floorLimitIndicator + 
      txn.crb + 
      txn.pcasIndicator + 
      txn.acqRefNum + 
      txn.acqBusId + 
      txn.purchaseDate + 
      txn.destAmt + 
      txn.destCurrCode + 
      txn.sourceAmt + 
      txn.sourceCurrCode + 
      txn.merchantName + 
      txn.merchantCity + 
      txn.merchantCountryCode + 
      txn.merchantCategoryCode + 
      txn.merchantZipCode + 
      txn.merchantState + 
      txn.requestedPaymentService + 
      txn.numOfPaymentForms + 
      txn.usageCode + 
      txn.reasonCode + 
      txn.settlementFlag + 
      txn.authCharIndicator + 
      txn.authCode + 
      txn.posTerminalCapability + 
      txn.intlFeeIndicator + 
      txn.cardholderIdMethod + 
      txn.collectionOnlyFlag + 
      txn.posEntryMode + 
      txn.centralProcessDate + 
      txn.reimbursementAttribute +
      '\n';
    return data;
  },

  createTCR1: function(txn) {
    var data = '';
    data = txn.transCode + 
      txn.transCodeQualifier + 
      txn.transCompSeqNum + 
      txn.businessFormatCode +
      txn.tokenAssuranceLevel +
      txn.reserved1 +
      txn.chargebackRefNum +
      txn.documentationIndicator +
      txn.memberMessageText +
      txn.specialConditionIndicators +
      txn.feeProgramIndicator +
      txn.issuerCharge +
      txn.reserved2 +
      txn.cardAcceptorID +
      txn.terminalID +
      txn.nationalReimbursementFee +
      txn.commerceAndPaymentIndicator +
      txn.specialChargebackIndicator +
      txn.interfaceTraceNumber +
      txn.acceptanceTerminalIndicator +
      txn.prepaidCardIndicator +
      txn.serviceDevelopmentField +
      txn.avsResponseCode +
      txn.authSourceCode +
      txn.purchaseIdentifierFormat +
      txn.accountSelection +
      txn.installmentPaymentCount +
      txn.purchaseIdentifier +
      txn.cashback +
      txn.chipConditionCode +
      txn.posEnvironment +
      '\n';
    return data;
  },

  createTCR5: function(txn) {
    var data = '';
    data = txn.transCode + 
      txn.transCodeQualifier + 
      txn.transCompSeqNum + 
      txn.transIdentifier + 
      txn.authAmt +
      txn.authCurrCode +
      txn.authResponseCode +
      txn.validationCode +
      txn.excludedTransIdentifierReason +
      txn.crsProcessingCode +
      txn.chargebackRightsIndicator +
      txn.multiClearingSeqNum +
      txn.multiClearingSeqCount +
      txn.marketAuthDataIndicator +
      txn.totalAuthAmt +
      txn.infoIndicator +
      txn.merchTelNum +
      txn.addlDataIndicator +
      txn.merchVolumeIndicator +
      txn.eCommGoodsIndicator +
      txn.merchVerificationValue +
      txn.interchangeFeeAmt +
      txn.interchangeFeeSign +
      txn.sourceToBaseExchangeRate +
      txn.baseToDestExchangeRate +
      txn.optionalIssuerISAAmt +
      txn.productId +
      txn.programId +
      txn.dccIndicator +
      txn.acctTypeId +
      txn.spendQualifiedIndicator +
      txn.panToken +
      txn.reserved +
      txn.cvv2ResultCode +
      '\n';
    return data;
  },

  createTrailer: function(txn) {
    var data = '';
    data = txn. transCode +
      txn.transCodeQualifier +
      txn.transCompSeqNum +
      txn.bin +
      txn.processingDate +
      txn.destinationAmt +
      txn.numMonetaryTrans + 
      txn.batchNum +
      txn.numTCRs +
      txn.reserved1 +
      txn.centerBatchID +
      txn.numTrans +
      txn.reserved2 +
      txn.sourceAmt +
      txn.reserved3 +
      txn.reserved4 +
      txn.reserved5 +
      txn.reserved6 +
      '\n';
    return data;
  }

};