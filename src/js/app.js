/* global gapi */
console.log('JS loaded');

function gapiReady() {
  gapi.client.load('youtube', 'v3')
    .then(() => {
      gapi.client.setApiKey('AIzaSyD6j30cRV6V92y2VRMWjIB-lxxO6e-hp9k');
    });
}

$(() => {

  const $results = $('.results');

  // add event listener to all <div> children of results

// Attach a delegated event handler
  $results.on( 'click', '*', function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
  });

  $('#search').on('submit', (e) => {
    e.preventDefault();

    const q = $('[name=q]').val();
    console.log(q);

    gapi.client.youtube.search.list({
      q,
      part: 'snippet',
      type: 'video'
    }).execute((res) => {
      $results.empty();
      res.items.forEach((video) => {
        console.log(video);

        // things you can do with video.snippet
        // channelTitle - check for VEVO
        // description - display
        // publishedAt - check for new vidoes only?
        // thumbnails.high.url


        $results.append(`
          <div>
            <p class="hidden"></p>
            <img src="${video.snippet.thumbnails.medium.url}"/>

            <h4>${video.snippet.title}</h4>
            <small>-posted by ${video.snippet.channelTitle}</small>
          </div>
        `);
          // <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      });
    });
  });
});
