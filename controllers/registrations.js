const User = require('../models/user');

// Display all users
function indexRoute(req, res, next) {
  User
    .find()
    .then(() => res.render('registrations/index'))
    .catch(next);
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
function showRoute(req, res){
  return res.render('registrations/show');
}
  // User
  //   .find()
  //   .exec()
  //   .then()
  //   .catch()
  //     next();

// .findById(req.params.id)
// .then((film) => {
//   if(!film) return res.notFound();
//   res.render('films/show', { film });
// })
// .catch(next);


// Account edit form
function editRoute(req, res){
  return res.render('registrations/edit');
}

// Edit account information
function updateRoute(){

}

// Delete account
function deleteRoute(req, res) {
  User
    .findById(req.params.id)
    .then((user) => {
      if(!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.redirect('/'));
}


  // req.user
  //   .remove()
  //   .then(() => {
  //     req.session.regenerate(() => res.unauthorized('/', 'Your account has been deleted'));
  //   })
  //   .catch(next);


module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
