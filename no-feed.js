setInterval(function() {
  $(
    '[id^=topnews_main_stream], ' +
    '[id^=mostrecent_main_stream], ' +
    '[id^=pagelet_home_stream]'
  ).children().remove();;

  $('#rightCol').remove();
}, 50);