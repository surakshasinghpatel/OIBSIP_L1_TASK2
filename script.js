$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleclass('fa-times');
    $('header').toggleclass('toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').toggleclass('fa-times');
    $('header').toggleclass('toggle');

    if($(window).scrollTop()>0){
      $('.top').show();
    }
    else{
      $('.top').hide();
    }
     
  });

  //smooth scrolling

  $('a[herf*="#"').on('click',function(e){

    e.preventDefault();

    $('html,body').animate({
      scrollTop : $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
    );
  });
});
