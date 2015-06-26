$('#add').click(function() {
  var fileTypeId = $('#fileType').val();
  var fileTypeDiv = getFileTypeDiv(fileTypeId);
  $('#' + fileTypeDiv).clone().show().appendTo('#mainForm');
});

$('#generate').click(function() {
  generateForm();
});

function getFileTypeDiv(fileTypeId) {
  switch(fileTypeId) {
    case '01':
      return '1stPresentmentForm';
      break;
    case '02':
      return 'ChargebackForm';
      break;
    case '03':
      return 'RepresentmentForm';
      break;
    default:
      break;
  }
};

function generateForm() {
  var fileTypeId = $('#fileType').val();
  var fileTypeDiv = getFileTypeDiv(fileTypeId);
  var data = {
    fileType: fileTypeId,
    transactions: []
  };
  $('#mainForm > div').each(function(i){
    var index = i + 1;
    var transactionCode = $('#mainForm div:nth-child(' + index + ') #transactionCode').val();
    var transaction = {
      transactionCode: transactionCode
    };
    data.transactions.push(transaction);
  });
  alert(JSON.stringify(data));
};