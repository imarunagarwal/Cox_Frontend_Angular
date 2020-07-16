// Close navbar on click of a tab on md or smaller screens
$(document).ready(function () {
  $('ul.navbar-nav>li.nav-item>a.nav-link').on('click', function () {
    if ($(window).width() < 991) {
      $('button.navbar-toggler').click();
    }
  })
});