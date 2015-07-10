 $(document).ready(function () {

  $('#firstPresentment').click(function() {
    redirectToGenerator('firstPresentment');
  });

  $('#chargeback').click(function() {
    redirectToGenerator('chargeback');
  });

  $('#representment').click(function() {
    redirectToGenerator('representment');
  });

});

function redirectToGenerator(type) {
  window.location.href = '/generator?type=' + type;
};