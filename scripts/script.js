$(document).ready(function(){
  $('.circle').click(function(){
    $('.header__container').animate({
      bottom: '400px'
    })
    $('.circle__img').slideToggle('slow');
    $('main').slideToggle('slow');
  });
});