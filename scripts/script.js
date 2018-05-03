$(document).ready(function(){
  $('.circle').click(function(){
    $('main').slideToggle('2500'),
    $('.main__title-box').toggleClass('main__title-box--active');
  });
});