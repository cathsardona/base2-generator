 $(document).ready(function () {
  $('#addTCR0').click(function() {
    $('.tcr0').last().clone().show().appendTo('#mainArea');
  });
  $('#mainArea').on('click', '#deleteTCR0', function(){
    $(this).parent().parent().remove();
  });
});