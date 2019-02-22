/* JavaScript file
Your script must be executed only when DOM is loaded
You must use jQuery
Listen for changes on each INPUT checkbox tag: */

var list = []
$('INPUT').on('click', function() {
  if $((this).val('amenity_id').checked) {
    list.push($(this).val('ameniry_id'));
    $('amenities h4').text($(this).val('data.name'))
  } else {
    list.pop($(this).val('amenity_id'));
});
