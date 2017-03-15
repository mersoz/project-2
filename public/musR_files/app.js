'use strict';

/* global gapi, YT */

console.log('JS loaded');

function gapiReady() {
  gapi.client.load('youtube', 'v3').then(function () {
    gapi.client.setApiKey('AIzaSyD6j30cRV6V92y2VRMWjIB-lxxO6e-hp9k');
  });
}

// var youtubePlayer;
// var player;
// const x = ['n95eekfFZZg', 'sXYa_qklKPc', 'THCj2AJuNVE'];
// let videoIndex = 0;
//
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//   // youtubePlayer = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: x[videoIndex],
//     events: {
//       'onReady': onPlayerReady
//       ,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
//
//
// function onPlayerReady(event) {
//   event.target.playVideoAt(0);
// }
//
// function onPlayerStateChange(event) {
//   if (event.data === YT.PlayerState.ENDED) {
//     // load next video in playlist
//     videoIndex ++;
//   }
// }

$(function () {

  var $results = $('.results');

  // add event listener to all <div> children of results

  // Attach a delegated event handler
  $results.on('click', 'button.chooseURL', function (e) {
    e.preventDefault();
    console.log($(e.target).data('youtubeurl'));
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
        console.log($input.val());
        queries.push($input.val());
      }
    });

    var q = queries.join(' ');

    // const q = $('[name=q]').val();
    // const q = $('[name=q]').parent().val();

    // const q = $('[name=name]').val();

    console.log(q);

    gapi.client.youtube.search.list({
      q: q,
      part: 'snippet',
      type: 'video'
    }).execute(function (res) {
      $results.empty();
      res.items.forEach(function (video) {
        console.log(video);

        $results.append('\n          <div>\n            <p class="hidden"></p>\n            <img src="' + video.snippet.thumbnails.medium.url + '"/>\n\n            <h4>' + video.snippet.title + '</h4>\n            <small>-posted by ' + video.snippet.channelTitle + '</small>\n            <button type="button" data-youtubeurl="' + video.id.videoId + '" class="chooseURL">Add this to Playlist</button>\n          </div>\n        ');
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      });
    });
  });
});