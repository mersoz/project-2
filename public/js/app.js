'use strict';

/* global gapi */
console.log('JS loaded');

function gapiReady() {
  gapi.client.load('youtube', 'v3').then(function () {
    gapi.client.setApiKey('AIzaSyD6j30cRV6V92y2VRMWjIB-lxxO6e-hp9k');
  });
}

$(function () {

  var $results = $('.results');

  // add event listener to all <div> children of results

  // Attach a delegated event handler
  $results.on('click', '*', function (event) {
    event.preventDefault();
    console.log($(this).text());
  });

  $('#search').on('submit', function (e) {
    e.preventDefault();

    var q = $('[name=q]').val();
    console.log(q);

    gapi.client.youtube.search.list({
      q: q,
      part: 'snippet',
      type: 'video'
    }).execute(function (res) {
      $results.empty();
      res.items.forEach(function (video) {
        console.log(video);

        // things you can do with video.snippet
        // channelTitle - check for VEVO
        // description - display
        // publishedAt - check for new vidoes only?
        // thumbnails.high.url


        $results.append('\n          <div>\n            <p class="hidden"></p>\n            <img src="' + video.snippet.thumbnails.medium.url + '"/>\n\n            <h4>' + video.snippet.title + '</h4>\n            <small>-posted by ' + video.snippet.channelTitle + '</small>\n          </div>\n        ');
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      });
    });
  });
});