const User = require('../models/user');

// Display all users -- WORKS
function indexRoute(req, res, next) {
  User
    .find()
    .then((users) => res.render('registrations/index', { users }))
    .catch(next);
}

// Register form -- WORKS
function newRoute(req, res) {
  return res.render('registrations/new');
}

// Create new user -- WORKS
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

// Show user account
function showRoute(req, res) {
  res.render('registrations/show');
}

// Account edit form
function editRoute(req, res){
  return res.render('registrations/edit');
}

// Edit account information
function updateRoute(req, res, next) {
  User
    .findById(req.user.id) // instead of req.params.id
    .then((user) => {
      console.log(`User: ${user}`); // NULL
      if(!user) return res.notFound();
      for(const field in req.body) {
        user[field] = req.body[field];
      }
      return user.save();
    })
    .then(() => res.redirect(`/account`))
    .catch(next);
}

// Delete account
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
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
