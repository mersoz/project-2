const Playlist = require('../models/playlist');

function indexRoute(req, res, next) {
  Playlist
    .find()
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
  .then(() => res.redirect('/'))
  .catch(next);
}

function showRoute(req, res, next) {
  Playlist
    .findById(req.params.id)
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
    .findById(req.params.id) // instead of req.params.id
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
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      // Get the embedded record by it's id
      const playlist = user.playlists.id(req.params.playlistId);
      playlist.remove();

      return user.save();
    })
    .then((user) => res.redirect(`/users/${user.id}`))
    .catch(next);
}

function newSongRoute(req, res) {
  return res.render('songs/new');
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,

  newSong: newSongRoute
};
