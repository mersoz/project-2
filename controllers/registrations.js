const User = require('../models/user');
const Playlist = require('../models/playlist');

function indexRoute(req, res, next) {
  User
    .find()
    .then((users) => res.render('registrations/index', { users }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('registrations/new');
}

function createRoute(req, res, next) {
  User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        req.flash('alert', 'Passwords do not match');
        return res.redirect('/register');
      }
      next();
    });
}

function editRoute(req, res){
  return res.render('registrations/edit');
}

function updateRoute(req, res, next) {
  User
    .findById(req.user.id)
    .then((user) => {
      if(!user) return res.notFound();
      for(const field in req.body) {
        user[field] = req.body[field];
      }
      return user.save();
    })
    .then(() => res.redirect(`/account`))
    .catch(next);
}

function deleteRoute(req, res, next) {
  req.user
    .remove()
    .then(() => {
      req.session.regenerate(() => res.unauthorized('/', 'Your account has been deleted'));
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
