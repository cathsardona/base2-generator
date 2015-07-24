 $(document).ready(function () {

  $('#addTCR0').click(function() {
    $('.tcr0').last().clone().show().appendTo('#mainArea');
  });

  $('#addTCR1').click(function() {
    $('.tcr1').last().clone().show().appendTo('#mainArea');
  });

  $('#addTCR5').click(function() {
    $('.tcr5').last().clone().show().appendTo('#mainArea');
  });

  $('#generate').click(function(){
    if ($('#mainArea .forms').length <= 0) {
      showModalStatus('error', 'Please add a transaction');
    } else if (validateForm('#mainArea .forms')){
      showModalLoading();
      generate();
    } else {
      showModalStatus('error', 'Please fill out all fields');
    }
  });

  $('#mainArea').on('click', '#delete', function() {
    $(this).closest('form').parent().remove();
  });

  $('#addHeaderIncomingCTF').click(function() {
    $('.headerIncomingCTF').last().clone().show().appendTo('#mainArea');
  });

  $('#addTrailer').click(function() {
    $('.trailer').last().clone().show().appendTo('#mainArea');
  });

});

function generate() {
  var data = {
    transactions: [],
    type: $('#type').val()
  };
  var txn;
  $('#mainArea > div').each(function () {
    data.transactions.push(convertFormToJSON($(this).find('form')));
  });
  $.ajax({
    type: 'POST',
    url: '/v1/base2',
    data: data,
    success: function() {
      showModalStatus('success');
    },
    error: function() {
      showModalStatus('error');
    }
  });
};

function convertFormToJSON(form){
  var array = form.serializeArray();
  var json = {};
  
  jQuery.each(array, function() {
      json[this.name] = this.value || '';
  });
  
  return json;
};

function showModalLoading() {
  $('#statusModal .modal-body .progress').show();
  $('#statusModal .modal-header .modal-title').html('Processing');
  $('#statusModal .modal-body #status').hide();
  $('#statusModal .close').hide();
  $('#statusModal').modal({backdrop: 'static'});
  $('#statusModal').modal('show');
};

function showModalStatus(status, details) {
  $('#statusModal .modal-body .progress').hide();
  if (status === 'success') {
    $('#statusModal .modal-header .modal-title').html('Success');
    $('#statusModal .modal-body #status').html('Successfully uploaded to S3').show();

  } else {
    $('#statusModal .modal-header .modal-title').html('Error');
    $('#statusModal .modal-body #status').html(details).show();
  }
  $('#statusModal').modal({backdrop: true});
  $('#statusModal .close').show();
};