const Playlist = require('../models/playlist');

function indexRoute(req, res, next) {
  Playlist
    .find()
    .populate('createdBy playlists.createdBy')
    .then((playlists) => {
      res.render('playlists/index', { playlists });
    })
    .catch(next);
}

function newRoute(req, res) {
  return res.render('playlists/new');
}

function createRoute(req, res, next) {
  req.body.createdBy = req.user;
  Playlist
  .create(req.body)
  .then(() => res.redirect('/playlists'))
  .catch(next);
}

function showRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
    .populate('createdBy playlists.createdBy')
    .then((playlist) => {
      res.render('playlists/show', { playlist });
    })
    .catch(next);
}

function editRoute(req, res) {
  Playlist
  .findById(req.params.id)
  .then((playlist) => {
    return res.render('playlists/edit', { playlist });
  });
}

function updateRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
    .then((playlist) => {
      console.log(`Playlist: ${playlist}`); // NULL
      if(!playlist) return res.notFound();
      for(const field in req.body) {
        playlist[field] = req.body[field];
      }
      return playlist.save();
    })
    .then((playlist) => res.redirect(`/playlists/${playlist.id}`))
    .catch(next);

}

function deleteRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
    .then((playlist) => {
      if(!playlist) return res.notFound();
      playlist.remove();
    })
    .then(() => res.redirect(`/playlists`))
    .catch(next);
}

function playRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
    .populate('createdBy playlists.createdBy')
    .then((playlist) => {
      res.render('playlists/play', { playlist });
    })
    .catch(next);
}

//////////////////  SONGS  //////////////////
function newSongRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
    .then((playlist) => {
      if(!playlist) return res.notFound();
      res.render('songs/new', { playlist });
    })
    .catch(next);
}
// Creates new song inside playlist without url

function createSongRoute(req, res, next) {
  req.body.createdBy = req.user;

  Playlist
    .findById(req.params.id)
    .then((playlist) => {
      if(!playlist) return res.notFound();
      playlist.songs.push(req.body);
      return playlist.save();
    })
    .then((playlist) => res.redirect(`/playlists/${playlist.id}`))
    .catch(next);
  // Search API results
}

// function showSongRoute() {
//   Playlist
//     .findById(req.params.id)
//     .then((playlist) => {
//       res.render('playlists/show', { playlist });
//     })
//     .catch(next);
// }

function editSongRoute(req, res) {
  Playlist
  .findById(req.params.id)
  .then((playlist) => {
    if(!playlist) return res.notFound();
    const song = playlist.songs.id(req.params.songId);
    return res.render('songs/edit', { playlist, song });
  });
}

function updateSongRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
    .then((playlist) => {
      if(!playlist) return res.notFound();
      const song = playlist.songs.id(req.params.songId);
      for(const field in req.body) {
        song[field] = req.body[field];
      }
      return playlist.save();
    })
    .then((playlist) => res.redirect(`/playlists/${playlist.id}`))
    .catch(next);

}

function deleteSongRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
    .then((playlist) => {
      if(!playlist) return res.notFound();
      const song = playlist.songs.id(req.params.songId);
      song.remove();
      return playlist.save();
    })
    .then((playlist) => res.redirect(`/playlists/${playlist.id}`))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  play: playRoute,

  newSong: newSongRoute,
  createSong: createSongRoute,
  // showSong: showSongRoute,
  editSong: editSongRoute,
  updateSong: updateSongRoute,
  deleteSong: deleteSongRoute
};
