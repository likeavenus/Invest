$(document).ready(function(){
  $('.circle').click(function(){
    $(this).animate({
      position: 'absolute',
      bottom: 'toggle',
    })
  });
});