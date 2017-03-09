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
