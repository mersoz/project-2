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

function showAccount(req, res, next) {
  console.log(req.session.userId);
  User
  .findById(req.session.userId)
  .then((user) => {
    return Playlist.find({ createdBy: user.id })
      .then((playlists) => {
        res.render('users/show', { user, playlists });
      });
  })
  .catch(next);
}

module.exports = {
  show: showProfile,
  account: showAccount
};
