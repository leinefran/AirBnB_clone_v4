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

  /*
  function: make a post request, and append tag and content to
            tag 'SECTION.places' if success.
  */
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    contentType: 'application/json',
    success: function (res) {
      for (let idx = 0; idx < res.length; idx++) {
        $('SECTION.places').append('<article>' +
       '<div class="title">' +
       '<h2>' + res[idx].name + '</h2>' +
       '<div class="price_by_night">' + res[idx].price_by_night + '</div>' +
       '</div>' +
       '<div class="information">' +
       '<div class="max_guest">' +
       '<i class="fa fa-users fa-3x" aria-hidden="true"></i>' +
       '<br />' + res[idx].max_guest + ' Guests' +
       '</div>' +
       '<div class="number_rooms">' +
       '<i class="fa fa-bed fa-3x" aria-hidden="true"></i>' +
       '<br />' + res[idx].number_rooms + ' Bedrooms' +
       '</div>' +
       '<div class="number_bathrooms">' +
       '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>' +
       '<br />' + res[idx].number_bathrooms + ' Bathrooms' +
       '</div>' +
       '</div>' +
       '<div class="description">' + res[idx].description + '</div>' +
       '</article>');
      }
    }
  });
});
