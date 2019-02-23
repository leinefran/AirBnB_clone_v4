/* JavaScript file
Your script must be executed only when DOM is loaded
You must use jQuery
Listen for changes on each INPUT checkbox tag: */

$(document).ready(function () {
  let list = [];
  $('INPUT').on('change', function () {
    if ($(this).is(':checked')) {
      list.push($(this).attr('data-name'));
      $('h4').text(list);
    } else {
      list.splice(list.indexOf($(this).attr('data-name')), 1);
      $('h4').text(list);
    }
  });
});
