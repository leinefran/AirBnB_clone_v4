/* JavaScript file */

$(document).ready(function () {
  /*
  function: handle changes on each INPUT checkbox tag
          if the checkbox is checked, add data name to the list.
          if the checkbox is unchecked, remove data name from the list.
  */
  let list = [];
  $('INPUT').on('change', function () {
    if ($(this).is(':checked')) {
      list.push($(this).attr('data-name'));
      $('.amenities h4').text(list);
    } else {
      list.splice(list.indexOf($(this).attr('data-name')), 1);
      $('.amenities h4').text(list);
    }
    if (list.length === 0) {
      $('.amenities h4').html('&nbsp;');
    }
  });

  /*
  function: check the status of a request
          if status is 'OK', add class avaiable.
          otherwise, remove the class avaiable.
  */
  $.get('http://0.0.0.0:5001/api/v1/status/', function (res) {
    if (res.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
