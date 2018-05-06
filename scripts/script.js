$(document).ready(function(){
  var elem1 = $('#a');
  var elem2 = $('#b');
  var elem3 = $('#c');
  var elem4 = $('.header__choice');

  $('.a').on("click", function(e) {
    e.preventDefault()
    elem1.slideToggle().addClass('toggle');
    elem2.hide();
    elem3.hide();
    elem4.toggleClass('new');
  });
  $('.b').on("click", function(e) {
    e.preventDefault();
    elem1.hide();
    elem2.slideToggle().addClass("toggle");
    elem3.hide();
    elem4.toggleClass("new");
})

$('.c').on("click", function(e) {
    e.preventDefault();
     elem1.hide();
     elem2.hide();
     elem3.slideToggle().addClass("toggle");
     elem4.toggleClass("new");

})

$(document).on('click', '.toggle', function() {
    elem1.hide();
    elem2.hide();
    elem3.hide();
    elem4.removeClass('new');
  });

$('.first').click(function() {
    $('#first-mobile-c').slideToggle('slow'),
    $('#arrow1').toggleClass('arrow-rotate'),
    $('header').toggleClass('change-bgr');
  });

$('.second').click(function() {
    $('#second-mobile-c').slideToggle('slow'),
    $('#arrow2').toggleClass('arrow-rotate'),
    $('header').toggleClass('change-bgr');
  });
$('.third').click(function() {
    $('#third-mobile-c').slideToggle('slow'),
    $('#arrow3').toggleClass('arrow-rotate'),
    $('header').toggleClass('change-bgr');
  });

});