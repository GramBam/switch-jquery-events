$(document).ready(function() {

  $(".switch").click(function(){
  //   $('button').toggleClass('on off');
  //   $('body').toggleClass('light dark');
  //   $('.status').text('Hey, who turned off the lights?');
  // });

  if ( $('button').attr('class') === 'on') {
    $('button').attr('class', 'off');
    $('body').attr('class', 'dark');
    $('.status').text('Hey, who turned off the lights?');

  } else {

      $('button').attr('class', 'on');
      $('body').attr('class', 'light');
      $('.status').text("It's so bright in here!");



  }
});
});
