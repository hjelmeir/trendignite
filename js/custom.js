jQuery(function($) {
  $('.deck-container .slide a.skip-me').on('click', function(e) {
    e.preventDefault();
    $.deck('next');
  });
  $('.deck-container .slide').not('.last').find('a.save-me').on('click', function(e) {
    e.preventDefault();
    saveyes($(this));
  });
  $('.deck-container .slide.last').find('a.save-me').one('click', function(e) {
    e.preventDefault();
    saveyes($(this));
    // need to parse results
    console.log('first click');
    console.log($(this))
    window.location = $(this).prop('href');
  });

  //$.deck('extend', 'saveyes', function() {
  //});
});
function saveyes(element) {
  console.log('save me');
  element.closest('.slide').addClass('saved');
  $.deck('next');
}
