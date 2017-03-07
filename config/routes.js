const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const users = require('../controllers/users');
const playlists = require('../controllers/playlists');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('statics/index'));

////////  PLAYLIST ROUTES  ////////
router.route('/playlists')
  .get(playlists.index);

router.route('/playlists/new')
  .get(secureRoute, playlists.new)
  .post(secureRoute, playlists.create);

router.route('/playlists/:id')
  .get(playlists.show)
  .put(secureRoute, playlists.update)
  .delete(secureRoute, playlists.delete);

router.route('/playlists/:id/edit')
  .get(secureRoute, playlists.edit);

////////  SONG ROUTES  ////////
router.route('/playlists/:id/songs/new')
  .get(secureRoute, playlists.newSong)
  .post(secureRoute, playlists.createSong);

// router.route('/playlists/:id/songs/:songId/search')
//   .put(secureRoute, playlists.updateSong)
//   .get(secureRoute, playlists.editSong);

router.route('/playlists/:id/songs/:songId')
  // .get(playlists.showSong)
  .put(secureRoute, playlists.updateSong)
  .delete(secureRoute, playlists.deleteSong);

router.route('/playlists/:id/songs/:songId/edit')
  .get(secureRoute, playlists.editSong);

////////  USER ROUTES  ////////
router.route('/users')
  .get(secureRoute, registrations.index);

router.route('/account')
  .get(secureRoute, registrations.show)
  .put(secureRoute, registrations.update)
  .delete(secureRoute, registrations.delete);

router.route('/account/edit')
  .get(secureRoute, registrations.edit);

//vvv EDIT OUT LATER vvv/
router.route('/users/:id')
  .get(users.show);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

// SESSION ROUTES
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
