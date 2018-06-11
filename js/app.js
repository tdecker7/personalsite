$(document).ready( function () {
  var btn = $('.btn-group');
  var origPosition = btn.position();
  console.log(origPosition.top, origPosition.left);
  var distance = btn.offset().top;
  var   $window  = $(window);

  var showFun = function () {
    $('.spinner').css('display', 'block');
    $('#fun').css('display', 'none');
    console.log('Worked!');
  }
  var hideFun = function () {
    $('.spinner').css('display', 'none');
    $('#fun').css('display', 'inline-block');
  }

  $('#fun').on('click', showFun);
  $('.spinner').on('click', hideFun);

  var scroll = function() {
    var elem = this;
  }
  $('#about-btn').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 1000);
  });

  $window.scroll( function () {

    if ($window.scrollTop() <= $('#about')) {
      console.log($('#about').children());
    }
    /*if ($window.scrollTop() <= origPosition.top) {
      btn.removeClass('sticky');
    }
    if ($window.scrollTop() >= distance) {
      btn.animate({
        top: 0,
        right: ('-'+ origPosition.left)
      }, 'slow');
      btn.addClass('sticky');
      console.log('at the top');
    }
  */
  })
})
