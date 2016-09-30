+function ($) {
  $('[data-dismiss="offcanvas"]').on('click', function() {
    $(this).parent('.offcanvas').offcanvas('hide');
  });
}(jQuery);