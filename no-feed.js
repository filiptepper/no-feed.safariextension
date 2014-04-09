setInterval(function() {
  $(
    '[id^=topnews_main_stream], ' +
    '[id^=mostrecent_main_stream], ' +
    '[id^=pagelet_home_stream]'
  ).children().remove();;

  $('.ticker_stream, .ego_column').remove();
}, 50);