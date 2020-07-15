// Close sidebar on click of a tab on mobile view
$(document).ready(function () {
  $('ul.navbar-nav>li.nav-item>a.nav-link').on('click', function () {
    if ($(window).width() < 575) {
      $('button.navbar-toggler').click();
    }
  })
});