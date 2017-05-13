'use strict';

/* global gapi, YT */
var windowWidth = $(window).width();

function gapiReady() {
  gapi.client.load('youtube', 'v3').then(function () {
    gapi.client.setApiKey('AIzaSyD6j30cRV6V92y2VRMWjIB-lxxO6e-hp9k');
  });
}

$(function () {

  var $results = $('.results');

  // Add event listener to all <div> children of results
  // Attach a delegated event handler
  $results.on('click', 'button.chooseURL', function (e) {
    e.preventDefault();
    var youtubeurl = $(e.target).data('youtubeurl');
    $('input[name="url"]').val(youtubeurl);
  });

  $('#search').on('click', function (e) {
    e.preventDefault();

    var $searchFields = $('.search-fields').find('input[type="text"], input[type="checkbox"]:checked');
    var queries = [];

    $.each($searchFields, function (index, input) {
      var $input = $(input);
      if ($input.val() !== '') {
        queries.push($input.val());
      }
    });

    var q = queries.join(' ');

    gapi.client.youtube.search.list({
      q: q,
      part: 'snippet',
      type: 'video'
    }).execute(function (res) {
      $results.empty();
      res.items.forEach(function (video) {
        $results.append('\n          <div>\n            <p class="hidden"></p>\n            <img src="' + video.snippet.thumbnails.medium.url + '"/>\n\n            <h4>' + video.snippet.title + '</h4>\n            <small>-posted by ' + video.snippet.channelTitle + '</small>\n            <button type="button" data-youtubeurl="' + video.id.videoId + '" class="chooseURL">Add this to Playlist</button>\n          </div>\n        ');
      });
    });
  });
});