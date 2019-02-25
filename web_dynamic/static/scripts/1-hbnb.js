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
});
