function validateForm(form)  {
  var valid = true;
  $(form + " input[type=text], "+ form + " input[type=password], " + form + " select, " + form + " input[type=file]").each(function() {
    if ($(this).css('display') != 'none' && $(this).css('visibility') != 'hidden' && !$(this).hasClass("optional")) {
      if ($(this).val().length === 0) {
        $(this).parent().addClass('has-error');
        valid = valid && false;
      } else {
        $(this).parent().removeClass('has-error');
      }
    }
  });
  return valid;
}
