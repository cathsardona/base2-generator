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
    generate();
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
    transactions: []
  };
  var txn;
  $('#mainArea > div').each(function () {
    data.transactions.push(convertFormToJSON($(this).find('form')));
  });
  $.post('/v1/base2', data);
};

function convertFormToJSON(form){
    var array = form.serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}