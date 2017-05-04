const User = require('../models/user');
const Playlist = require('../models/playlist');

function showProfile(req, res, next) {
  User
  .findById(req.params.id)
  .then((user) => {
    return Playlist.find({ createdBy: user.id })
      .then((playlists) => {
        res.render('users/show', { user, playlists });
      });
  })
  .catch(next);
}

module.exports = {
  show: showProfile
};
