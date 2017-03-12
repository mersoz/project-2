/* global gapi, YT */
console.log('JS loaded');
const windowWidth = $( window ).width();
console.log(windowWidth);

// $( window ).resize(() => {
//   const windowWidthDif = (windowWidth - $( window ).width())/5;
//   console.log(windowWidthDif);
//   let h1MarginTop = $( 'h1' ).css('margin-top');
//   let asideMarginTop = $( 'aside' ).css('margin-top');
//
//   // el.css('margin-left',marginRightg+'px');
//   asideMarginTop = Number(asideMarginTop.replace(/[^0-9.]/g, ''));
//   h1MarginTop = Number(h1MarginTop.replace(/[^0-9.]/g, ''));
//   // console.log(`top morgin: ${marginTop}`);
//   var newAsideMarginTop = asideMarginTop + windowWidthDif;
//   // console.log(`top morgin: ${marginTop}`);
//   var newH1MarginTop = h1MarginTop + windowWidthDif;
//   // console.log(`new margin top: ${newMarginTop}`);
//
//
//   $( 'h1' ).css('margin-top', newH1MarginTop+'px');
//   $( 'aside' ).css('margin-top', newAsideMarginTop+'px');
//   // $( 'aside' ).css('margin-top', newMarginTop+'px');
//
//
// });

function gapiReady() {
  gapi.client.load('youtube', 'v3')
    .then(() => {
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

$(() => {

  const $results = $('.results');

  // add event listener to all <div> children of results


// Attach a delegated event handler
  $results.on( 'click', 'button.chooseURL', function(e) {
    e.preventDefault();
    console.log( $(e.target).data('youtubeurl'));
    const youtubeurl = $(e.target).data('youtubeurl');
    $('input[name="url"]').val(youtubeurl);
  });


  $('#search').on('click', (e) => {
    e.preventDefault();

    const $searchFields = $('.search-fields').find('input[type="text"], input[type="checkbox"]:checked');
    const queries = [];

    $.each($searchFields, (index, input) => {
      const $input = $(input);
      if ($input.val() !== '') {
        console.log($input.val());
        queries.push($input.val());
      }
    });

    const q = queries.join(' ');


    // const q = $('[name=q]').val();
    // const q = $('[name=q]').parent().val();

    // const q = $('[name=name]').val();

    console.log(q);

    gapi.client.youtube.search.list({
      q,
      part: 'snippet',
      type: 'video'
    }).execute((res) => {
      $results.empty();
      res.items.forEach((video) => {
        console.log(video);

        $results.append(`
          <div>
            <p class="hidden"></p>
            <img src="${video.snippet.thumbnails.medium.url}"/>

            <h4>${video.snippet.title}</h4>
            <small>-posted by ${video.snippet.channelTitle}</small>
            <button type="button" data-youtubeurl="${video.id.videoId}" class="chooseURL">Add this to Playlist</button>
          </div>
        `);
          // <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      });
    });
  });
});
