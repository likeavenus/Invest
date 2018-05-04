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
  })
});