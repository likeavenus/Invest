$(document).ready(function(){
  $('.circle').click(function(){
    $('.header__container').animate({
      bottom: '400px'
    })
    $('.circle__img').toggle();
    $('main').toggle();
  });
});