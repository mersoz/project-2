const User = require('../models/user');

// Display all users
function indexRoute(){

}

// Register form
function newRoute(req, res) {
  return res.render('registrations/new');
}

// Create new user
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
function showRoute(){

}

// Account edit form
function editRoute(){

}

// Edit account information
function updateRoute(){

}

// Delete account
function deleteRoute(){

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
